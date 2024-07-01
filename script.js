document.addEventListener("DOMContentLoaded", function() {
    const currentTimeElement = document.getElementById("current-time");
    const currentDayElement = document.getElementById("current-day");

    function updateTime() {
        const now = new Date();

        // Convert to UTC time
        const utcTimeString = now.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: 'numeric', minute: 'numeric', hour12: true });
        const dateString = now.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric' });
        const yearString = now.getUTCFullYear();

        // Display the formatted time and date
        currentTimeElement.textContent = `Current Time (UTC): ${utcTimeString} | ${dateString} | ${yearString}`;
        currentDayElement.textContent = `Current Day: ${now.toLocaleDateString('en-US', { timeZone: 'UTC', weekday: 'long' })}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
});






// Display natural size of Slack profile picture
const output = document.querySelector("pre");
const image = document.getElementById("profile-picture");
image.addEventListener("load", () => {
    const { naturalWidth, naturalHeight, width, height } = image;
    output.textContent = `Image natural size: ${naturalWidth} x ${naturalHeight} pixels \nCurrent size: ${width} x ${height} pixels`;
});