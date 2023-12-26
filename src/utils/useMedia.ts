import { useEffect, useState } from "react";

//Hook này sử dụng matchMedia để kiểm tra xem điều kiện media nào đang khớp
//với kích thước cửa sổ hiện tại.
//Nó xác định giá trị tương ứng với điều kiện truyền vào đầu tiên mà nó khớp.
//Nếu không có điều kiện nào khớp, nó trả về giá trị mặc định.

export default function useMedia(
  queries: string[], //queries: Là một mảng chứa các chuỗi truy vấn media.
  values: number[], //values: Là một mảng chứa các giá trị tương ứng với các truy vấn media.
  defaultValue: number //defaultValue: Là giá trị mặc định nếu không có truy vấn nào khớp.
) {
  //Xác định giá trị ban đầu dựa trên kích thước cửa sổ hiện tại và trả về giá trị đó.
  const match = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;

  //Hook sử dụng useState để lưu trữ giá trị này và useEffect để thực hiện việc theo dõi khi kích thước cửa sổ thay đổi.
  const [value, setValue] = useState(match);
  useEffect(() => {
    //Mỗi khi kích thước cửa sổ thay đổi (resize event), handler được gọi lại,
    //kiểm tra lại và cập nhật giá trị mới nếu có thay đổi.
    const handler = () => setValue(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  //Hook trả về giá trị thể hiện điều kiện phương tiện truyền thông hiện tại (hoặc giá trị mặc định)
  //dựa trên kích thước cửa sổ hiện tại.
  return value;
}
