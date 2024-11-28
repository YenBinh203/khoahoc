import { http } from "./config";

export const khoaHocService = {
  getCourse: () => {
    return http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
  getCourse1: () => {
    return http.get("/video");
  },
};
