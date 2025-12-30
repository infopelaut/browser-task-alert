// ===== CONFIG =====
const CHECK_INTERVAL = 30 * 1000;        // 30 detik (cek notif)
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 menit (reload halaman)
const TARGET_ROWS = 3;                   // notif jika >= 3 project aktif

// ===== UTILS =====
function getActiveProjectRowCount() {
  // Ambil active-table PERTAMA (Projects)
  const activeTables = document.querySelectorAll(".active-table");

  if (!activeTables.length) {
    console.warn("⚠️ active-table not found");
    return 0;
  }

  const projectsTable = activeTables[0];
  return projectsTable.querySelectorAll("tbody tr").length;
}

// ===== MAIN LOGIC =====
function checkRowsAndNotify() {
  const rowCount = getActiveProjectRowCount();

  if (rowCount >= TARGET_ROWS) {
    chrome.runtime.sendMessage({
      type: "ALERT",
      message: `🚨 DA PROJECT ACTIVE
Active projects: ${rowCount}
⏰ ${new Date().toLocaleTimeString()}`
    });

    console.log(`[ALERT] active projects = ${rowCount}`);
  } else {
    console.log(`[SILENT] active projects = ${rowCount}`);
  }
}

// ===== RUNNERS =====

// tunggu DOM stabil dulu
setTimeout(() => {
  console.log("✅ Initial check");
  checkRowsAndNotify();
}, 3000);

// cek tiap 30 detik
setInterval(() => {
  checkRowsAndNotify();
}, CHECK_INTERVAL);

// auto refresh tiap 15 menit
setTimeout(() => {
  console.log("🔄 Auto refresh triggered");
  location.reload();
}, REFRESH_INTERVAL);
