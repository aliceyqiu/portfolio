const LABELED_ITEMS_HOTSPOTS = [
    { x: 5,  y: 19, w: 19, h: 20, label: "Diet Pepsi:\nsubstituting Zero Ultra White Monster, my essential college drink" },
    { x: 30, y: 17, w: 22, h: 16, label: "Fun Dip:\nsweet reminder of my childhood" },
    { x: 52, y: 14, w: 10, h: 15, label: "Black nail polish:\nthe only nail polish color I wore" },
    { x: 62, y: 14, w: 12, h: 10, label: "Plastic Easter egg:\nmemento from a fun night with friends" },
    { x: 16, y: 40, w: 10, h: 20, label: "Instant coffee:\nI hate instant coffee but I drink a LOT of coffee" },
    { x: 24, y: 29, w: 8,  h: 36, label: "Lock necklace:\nmy favorite necklace at the time" },
    { x: 31, y: 34, w: 15, h: 16, label: "Tea bag:\npopular item to take from dining halls" },
    { x: 30, y: 50, w: 12, h: 5,  label: "Cell storage tube (clean):\nrepresentation of my major" },
    { x: 32, y: 55, w: 8,  h: 6,  label: "Ring:\nreally worn" },
    { x: 45, y: 32, w: 13, h: 15, label: "Prescription bottle (empty):\nmy meds" },
    { x: 56, y: 30, w: 16, h: 10, label: "Sugar packet:\nanother dining hall memento" },
    { x: 73, y: 32, w: 22, h: 20, label: "Crumpled poster:\nleftover SYZ recruitment material from 2022" },
    { x: 58, y: 40, w: 13, h: 8,  label: "Shrinky dink keychain:\nunofficial SYZ merch" },
    { x: 60, y: 50, w: 7,  h: 5,  label: "Nose ring:\nmy og septum piercing" },
    { x: 66, y: 46, w: 10, h: 7,  label: "Orca eraser:\nsymbol of Evanston, IL" },
    { x: 60, y: 54, w: 7,  h: 6,  label: "Dime:\nnot a quarter" },
    { x: 67, y: 55, w: 12, h: 12, label: "Beads:\nselected beads from an arts & craft kit" },
    { x: 56, y: 63, w: 11, h: 27, label: "Plastic spoon:\nloose backpack object" },
    { x: 68, y: 67, w: 19, h: 16, label: "Plaster fingers:\nfragments from a previous project" },
    { x: 8,  y: 66, w: 51, h: 30, label: "Lined paper:\nnotes from Japanese and Organic Chemistry" },
    { x: 43, y: 49, w: 17, h: 15, label: "Sticky note:\nit be like that..." },
];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hotspot-image").forEach((container) => {
        const tooltip = document.createElement("div");
        tooltip.className = "hotspot-tooltip";
        container.appendChild(tooltip);

        LABELED_ITEMS_HOTSPOTS.forEach((spot) => {
            const hotspot = document.createElement("div");
            hotspot.className = "hotspot";
            hotspot.style.left = spot.x + "%";
            hotspot.style.top = spot.y + "%";
            hotspot.style.width = spot.w + "%";
            hotspot.style.height = spot.h + "%";

            hotspot.addEventListener("mouseenter", () => {
                hotspot.classList.add("is-active");

                tooltip.textContent = "";
                const [title, ...rest] = spot.label.split("\n");
                const titleEl = document.createElement("strong");
                titleEl.textContent = title;
                tooltip.appendChild(titleEl);
                if (rest.length) {
                    tooltip.appendChild(document.createTextNode("\n" + rest.join("\n")));
                }

                tooltip.classList.add("is-visible");
            });
            hotspot.addEventListener("mouseleave", () => {
                hotspot.classList.remove("is-active");
                tooltip.classList.remove("is-visible");
            });

            container.appendChild(hotspot);
        });

        container.addEventListener("mousemove", (event) => {
            const bounds = container.getBoundingClientRect();
            const offset = 16;
            let left = event.clientX - bounds.left + offset;
            let top = event.clientY - bounds.top + offset;

            const tooltipRect = tooltip.getBoundingClientRect();
            if (left + tooltipRect.width > bounds.width) {
                left = event.clientX - bounds.left - tooltipRect.width - offset;
            }
            if (top + tooltipRect.height > bounds.height) {
                top = event.clientY - bounds.top - tooltipRect.height - offset;
            }

            tooltip.style.left = left + "px";
            tooltip.style.top = top + "px";
        });
    });
});
