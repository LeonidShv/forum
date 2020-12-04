import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import Tag from "./Tag";
import Search from "../Search";
import "./index.css";

function Tags(props) {
  const [tags, setTags] = useState({ tags: [], isLoading: false, error: null });
  let urlQuestions = `https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg((`;
  useEffect(() => {
    fetch(urlQuestions)
      .then((res) => res.json())
      .then(
        (result) => {
          setTags({ tags: result.items, isLoading: true, error: tags.error });
        },
        (error) => {
          setTags({ tags: tags.tags, isLoading: true, error: error });
        }
      );
  }, []);

  let { isTags } = props;
  const filterContent = [
    { btn: "Popular", key: "Popular_1" },
    { btn: "Name", key: "Name_2" },
    { btn: "New", key: "New_3" },
  ];
  if (!tags.isLoading && tags.tags.length) {
    return "load";
  }

  const listTags = tags.tags.map((tag) => (
    <Tag tag={tag} key={tag.count + tag.name} />
  ));

  return (
    <div className="tags__wrap content">
      <h2 className="title">Tags</h2>
      <div className="filter__block space-between">
        <Search />
        <Filter filterContent={filterContent} />
      </div>

      <div className="tags__list">{listTags}</div>
    </div>
  );
}

export default Tags;
