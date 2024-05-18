const validatePhoneVN = (phoneNumber: string) => {
  // Xóa các khoảng trắng, dấu gạch ngang, dấu chấm
  phoneNumber = phoneNumber.replace(/\s|\.|-/g, "");

  // Kiểm tra độ dài và bắt đầu bằng +84 hoặc 0
  const regex =
    /^(?:\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/;

  return regex.test(phoneNumber);
};

export default validatePhoneVN;
