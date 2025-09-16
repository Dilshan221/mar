const API_BASE_URL = "http://localhost:8000/api";

export const apiService = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  },

  testConnection() {
    return this.request("/test");
  },

  // User routes
  getUsers() {
    return this.request("/user/getAllUsers");
  },

  getUserById(id) {
    return this.request(`/user/${id}`);
  },

  createUser(userData) {
    return this.request("/user/create", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  },

  updateUser(id, userData) {
    return this.request(`/user/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  },

  deleteUser(id) {
    return this.request(`/user/delete/${id}`, {
      method: "DELETE",
    });
  },

  // Attendance routes
  getAttendanceRecords() {
    return this.request("/attendance/getAll");
  },

  markAttendance(attendanceData) {
    return this.request("/attendance/mark", {
      method: "POST",
      body: JSON.stringify(attendanceData),
    });
  },

  getUserAttendance(userId) {
    return this.request(`/attendance/getUserAttendance/${userId}`);
  },

  updateAttendance(id, attendanceData) {
    return this.request(`/attendance/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(attendanceData),
    });
  },
};
