import React from "react";

export default function About(props) {
  return (
    <div
      style={{
        backgroundColor: props.theme ? "#212529" : "rgb(255 0 0 / 8%)",
        height: "50vh",
        width: "80vh",
        color: props.theme ? "white" : "#212529",
        boxShadow: "rgb(136, 136, 136) 4px 7px 18px 3px",
      }}
      className="m-4 mt-2 p-3"
    >
      <h4>About TextUtils</h4>
      <p className="mt-3">
        Hello! Welcome to the my page. This is TextUtils Application ,Here you
        can convert the text into the uppercase and lowercase as per your
        requirements. It is done by clicking the below given button. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum ipsam vero nisi
        recusandae non rerum. Mollitia ipsa doloremque ipsam repudiandae! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Architecto officia
        maiores officiis. Accusamus, laudantium veniam. Libero a aliquid omnis.
        Harum non quidem vel, exercitationem accusantium voluptas quibusdam
        dolores, laudantium expedita placeat saepe, labore natus dolorum illum
        consequatur a qui eum eaque aspernatur! Hic dicta quisquam provident
        doloribus, et cumque! Aspernatur?
      </p>
    </div>
  );
}
