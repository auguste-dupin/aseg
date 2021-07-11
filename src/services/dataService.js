import http from "../http-common";

class AsegDataService {
  getAll() {
    return http.get(`pacientes`);
  }

  getMonth() {
    return http.get(`pacientes`);
  }

  find(timeRange, aseg) {
    return http.get(`pacientes?aseg=${aseg}&timeRange=${timeRange}`);
  }

  createPaciente(data) {
    return http.post("pacientes-new", data);
  }

  borrarPaciente(id, userId) {
    return http.delete(`/pacientes-delete?id=${id}`);
  }
}

export default new AsegDataService();