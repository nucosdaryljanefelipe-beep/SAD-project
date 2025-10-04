body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #fbecb2;
}

.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background: #fde2a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 8px rgba(0,0,0,0.03);
  padding-top: 20px;
  transition: width 0.3s;
}

.logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

nav ul li {
  width: 100%;
}

.sidebar-icon {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 5px 0;
  color: #a24b00;
  font-size: 17px;
  text-decoration: none;
  border-radius: 25px;
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.sidebar-icon span {
  margin-right: 12px;
  font-size: 20px;
}

.sidebar-icon:hover {
  background: rgba(255, 213, 128, 0.5);
  box-shadow: 0 4px 12px rgba(255,140,0,0.2);
  color: #fff;
  backdrop-filter: blur(4px);
}

.sidebar-icon.active {
  background: #ffb556;
  color: #fff;
}

.logout {
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
}

.logout a {
  display: flex;
  align-items: center;
  color: #a24b00;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 25px;
  transition: background 0.2s;
}

.logout a:hover {
  background: rgba(255, 213, 128, 0.5);
  color: #fff;
  backdrop-filter: blur(4px);
}

main {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
}

.grades-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.grades-header h2 {
  color: #d22d2d;
  margin: 0;
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
}

.course-card {
  background: #d22d2d;
  color: #fff;
  border-radius: 14px;
  padding: 24px 18px 12px 18px;
  box-shadow: 0 3px 12px rgba(210,45,45,0.08);
  position: relative;
  min-width: 160px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s;
}

.course-card:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 6px 24px rgba(210,45,45,0.18);
  background: linear-gradient(120deg, #d22d2d 80%, #a24b00 100%);
  backdrop-filter: blur(3px);
}

.course-title {
  font-size: 20px;
  font-weight: 700;
}
.course-code, .course-time {
  font-size: 14px;
  margin-top: 7px;
}
.arrow-btn {
  position: absolute;
  bottom: 8px;
  right: 12px;
  background: rgba(255,255,255,0.7);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 18px;
  color: #d22d2d;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: background 0.2s;
}
.arrow-btn:hover {
  background: #fff;
  color: #a24b00;
}

.grades-table {
  background: #d22d2d;
  border-radius: 14px;
  margin-top: 40px;
  padding: 22px;
  box-shadow: 0 3px 12px rgba(210,45,45,0.08);
  display: flex;
  flex-direction: column;
  min-width: 680px;
  width: 95%;
  max-width: 980px;
}

.grades-table-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
  gap: 8px;
}

.grades-table-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.grades-table-row input {
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  outline: none;
  transition: box-shadow 0.2s;
}
.grades-table-row input:focus {
  box-shadow: 0 2px 16px rgba(210,45,45,0.2);
}

.back-btn {
  background: rgba(210,45,45,0.12);
  color: #d22d2d;
  border: none;
  border-radius: 18px;
  padding: 8px 18px;
  font-size: 17px;
  font-weight: 600;
  margin-right: 24px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.back-btn:hover {
  background: #d22d2d;
  color: #fff;
}

@media (max-width: 1100px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 560px;
  }
  .grades-table {
    min-width: 450px;
  }
}
@media (max-width: 650px) {
  .container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    flex-direction: row;
    padding: 12px 0;
    justify-content: space-between;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
  }
  main {
    padding: 12px;
  }
  .courses-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
  .grades-table {
    min-width: 320px;
    width: 100%;
  }
}