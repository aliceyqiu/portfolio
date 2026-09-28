/* Gentle cursor trail — dotted stroke in --red; still when idle. */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const SEGMENTS = 10;
  const HEAD_LERP = 0.12;
  const TAIL_LERP = 0.28;
  const CURL = 4;
  const TRAIL_WIDTH = 5.5;
  const DOT_RADIUS = TRAIL_WIDTH / 2;
  const SETTLE_EPS = 0.35;
  const IDLE_SPEED = 0.4;

  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-trail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const points = Array.from({ length: SEGMENTS }, () => ({ x: 0, y: 0 }));
  let mouse = { x: 0, y: 0 };
  let speed = 0;
  let visible = false;
  let seeded = false;
  let looping = false;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function trailColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--burgundy').trim();
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function isSettled() {
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const p = points[i];
      if (Math.hypot(prev.x - p.x, prev.y - p.y) > SETTLE_EPS) return false;
    }
    if (Math.hypot(mouse.x - points[0].x, mouse.y - points[0].y) > SETTLE_EPS) {
      return false;
    }
    return true;
  }

  function tick() {
    speed *= 0.9;

    points[0].x = lerp(points[0].x, mouse.x, HEAD_LERP);
    points[0].y = lerp(points[0].y, mouse.y, HEAD_LERP);

    const moving = speed > IDLE_SPEED;
    const curl = moving ? CURL * Math.min(speed / 16, 1) ** 1.5 : 0;

    for (let i = 1; i < points.length; i++) {
      const t = TAIL_LERP - (i / points.length) * 0.06;
      const prev = points[i - 1];
      let targetX = prev.x;
      let targetY = prev.y;

      if (curl > 0) {
        const dx = prev.x - points[i].x;
        const dy = prev.y - points[i].y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const bend = curl * (i / points.length);
        targetX += nx * bend;
        targetY += ny * bend;
      }

      points[i].x = lerp(points[i].x, targetX, t);
      points[i].y = lerp(points[i].y, targetY, t);
    }

    if (visible) draw();

    if (visible && (moving || !isSettled())) {
      requestAnimationFrame(tick);
    } else {
      looping = false;
    }
  }

  function startLoop() {
    if (looping) return;
    looping = true;
    requestAnimationFrame(tick);
  }

  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (!visible) return;

    ctx.fillStyle = trailColor();
    ctx.globalAlpha = 1;

    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function onMove(e) {
    if (!seeded) {
      for (const p of points) {
        p.x = e.clientX;
        p.y = e.clientY;
      }
      seeded = true;
    }
    const dx = e.clientX - mouse.x;
    const dy = e.clientY - mouse.y;
    speed = Math.hypot(dx, dy);
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    visible = true;
    canvas.classList.add('is-visible');
    startLoop();
  }

  function onLeave() {
    visible = false;
    canvas.classList.remove('is-visible');
    ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', onMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', onLeave);
})();
