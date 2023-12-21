import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { https } from "../service/config";
//
import { Space, Table, Tag, message } from "antd";
import Footer from "../components/Footer/Footer";

// email, maLoaiNguoiDung
//
export default function HomePage() {
  const [userArr, setUserArr] = useState([]);
  useEffect(() => {
    fetchUserArr();
  }, []);
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text == "KhachHang") return <Tag color="green">Khách hàng</Tag>;
        return <Tag color="red">Quản trị</Tag>;
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, user) => (
        <Space size="middle">
          <button
            onClick={() => {
              handleDelete(user.taiKhoan);
            }}
            className="bg-red-500 text-white"
          >
            Xóa{" "}
          </button>
        </Space>
      ),
    },
  ];
  const fetchUserArr = () => {
    https
      .get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00")
      .then((res) => {
        setUserArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (taiKhoan) => {
    https
      .delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((res) => {
        message.success("Xóa thành công");
        fetchUserArr();
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };

  return (
    <div>
      <Header />
      <Table columns={columns} dataSource={userArr} />
      <Footer />
    </div>
  );
}
