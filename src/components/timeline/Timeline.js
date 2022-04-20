import React from "react";
import { Post } from "./Post";
import { PostEmail } from "./PostEmail";
import { PostProducts } from "./PostProducts";
import { Texts } from "./Texts";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__header">
        <h2>Kazutoshi Yamaguchi Official Website</h2>
      </div>

      <Post
        displayName="Profile"
        text={Texts.ProfileText}
        avatar="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        id="profile"
      />
      <Post
        displayName="Skills"
        text={Texts.SkillsText}
        avatar="https://images.unsplash.com/photo-1615833843615-884a03a10642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        id="skills"
      />
      <Post
        displayName="Hobbies"
        text={Texts.HobbiesText}
        avatar="https://images.unsplash.com/photo-1590364962261-20baeb6262a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        id="hobbies"
      />
      <PostProducts
        displayName="Products"
        text={Texts.ProductsText}
        avatar="https://images.unsplash.com/photo-1564228511783-821f2f547f44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1582&q=80"
        id="products"
      />
      <PostEmail
        displayName="Contact"
        avatar="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        id="contact"
      />
    </div>
  );
};
