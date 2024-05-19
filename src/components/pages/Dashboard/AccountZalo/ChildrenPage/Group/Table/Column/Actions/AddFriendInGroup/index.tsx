// import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
// import { Avatar, Checkbox, List, Modal, Switch, Typography } from "antd";
// import { useState } from "react";

// interface IAddFriendInGroupProps {
//   statusModal: (status: boolean) => void;
//   open: boolean;
// }

// const AddFriendInGroup: React.FC<IAddFriendInGroupProps> = ({
//   statusModal,
//   open,
// }) => {
//   const [isOpenModal, setIsOpenModal] = useState(open);
//   const handleConfirm = () => {
//     setIsOpenModal(false);
//     statusModal(false);
//   };
//   const handleClose = () => {
//     statusModal(false);
//   };
//   return (
//     <Modal
//       title="Thêm bạn bè trong nhóm"
//       open={isOpenModal}
//       onCancel={() => handleClose}
//       onOk={handleConfirm}
//       okText="Kết bạn"
//       cancelText="Hủy"
//     >
//       <div className="">
//         <div className="flex flex-col items-center justify-center gap-2">
//           <Avatar
//             src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
//             size={64}
//           />
//           <Typography.Text>Nhóm tiếng anh</Typography.Text>
//         </div>
//         <div className="my-2 flex items-center justify-between gap-2">
//           <label>Tất cả thành viên</label>
//           <Switch
//             checkedChildren={<CheckOutlined />}
//             unCheckedChildren={<CloseOutlined />}
//             onChange={(checked: boolean) => setOptionAllMember(checked)}
//             checked={optionAllMember}
//           />
//         </div>
//         <div className="my-2 flex items-center justify-between gap-2">
//           <label>Nhóm trường & nhóm phó</label>
//           <Switch
//             checkedChildren={<CheckOutlined />}
//             unCheckedChildren={<CloseOutlined />}
//           />
//         </div>

//         {!optionAllMember && (
//           <div className="mt-5">
//             <Typography.Text>Danh sách bạn bè</Typography.Text>

//             <List
//               dataSource={data}
//               renderItem={(item, index) => (
//                 <div className="flex w-full items-center justify-between">
//                   <List.Item className="w-full flex-1">
//                     <List.Item.Meta
//                       avatar={
//                         <Avatar
//                           src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
//                         />
//                       }
//                       title={<a href="https://ant.design">{item.title}</a>}
//                     />
//                   </List.Item>
//                   <Checkbox className=" w-full flex-1 justify-end" />
//                 </div>
//               )}
//             />
//           </div>
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default AddFriendInGroup;
