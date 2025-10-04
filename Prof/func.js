const teacherName = "Ms. Santos";

const weeklySchedules = {
   1: [ // Monday
        { time: "7:00AM-10:00AM", section: "SBIT-1D", room: "IK604" },
        { time: "11:30AM-1:30PM", section: "SBIT-1D", room: "IL501" }
    ],
    2: [ // Tuesday
        { time: "7:00AM-10:00AM", section: "SBIT-1F", room: "IL502" },
        { time: "11:00AM-1:30PM", section: "SBIT-1F", room: "IK604" }
    ],
    3: [ // Wednesday
        { time: "9:00AM-11:00AM", section: "SBIT-1C", room: "IK101" },
        { time: "1:00PM-3:00PM", section: "SBIT-2B", room: "IK201" }
    ],
    4: [], // Thursday NO CLASSES
    5: [ // Friday
        { time: "10:00AM-12:00PM", section: "SBIT-4B", room: "IK305" }
    ],
    6: []  // Saturday NO CLASSES
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setGreeting() {
    document.getElementById('teacherName').textContent = teacherName + "!";
}

function updateSchedule(dayIndex) {
    const scheduleList = document.getElementById('scheduleList');
    const classes = weeklySchedules[dayIndex] || [];
    scheduleList.innerHTML = '';
    if (classes.length === 0) {
        scheduleList.innerHTML = `<div style="color:#d41a1a;font-size:1.15rem;">No classes scheduled.</div>`;
    } else {
        classes.forEach(c => {
            const row = document.createElement('div');
            row.className = 'schedule-row';
            row.innerHTML = `<span>${c.time}</span><span>${c.section}</span><span>${c.room}</span>`;
            scheduleList.appendChild(row);
        });
    }
}

function setDropdownLabel(dayIndex) {
    const label = document.getElementById('dropdownLabel');
    const today = new Date().getDay();
    if (dayIndex === today) {
        label.textContent = "Today Class";
    } else {
        label.textContent = `${dayNames[dayIndex]} Class`;
    }
}

function buildDropdownMenu(selectedDay) {
    const menu = document.getElementById('dropdownMenu');
    menu.innerHTML = '';
    // Loop only Monday (1) → Saturday (6)
    for (let i = 1; i <= 6; i++) {
        const item = document.createElement('div');
        item.className = 'dropdown-item' + (i === selectedDay ? ' selected' : '');
        item.textContent = dayNames[i];
        item.dataset.dayIndex = i;
        item.onclick = function() {
            setDropdownLabel(i);
            updateSchedule(i);
            menu.style.display = 'none';
            document.querySelector('.dropdown-arrow').style.transform = "rotate(0deg)";
        };
        menu.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    let today = new Date().getDay(); // Sunday=0 ... Saturday=6
    if (today === 0) today = 1; // If Sunday, default to Monday
    setDropdownLabel(today);
    updateSchedule(today);
    buildDropdownMenu(today);

    const dropdownHeader = document.getElementById('dropdownHeader');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const arrow = document.querySelector('.dropdown-arrow');

    dropdownHeader.addEventListener('click', function(e) {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        } else {
            dropdownMenu.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        }
    });
    document.addEventListener('click', function(e) {
        if (!dropdownHeader.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });
});
