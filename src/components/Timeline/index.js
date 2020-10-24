import { h } from "preact";
import style from "./index.css";

const Timeline = () => {
  const timelineData = [
    {
      title: "Senior Developer",
      year: "2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit aorci. In suscipit quam eget dui auctor.",
      color: "#fff",
    },
    {
      title: "Software Engineer",
      year: "2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit aorci. In suscipit quam eget dui auctor.",
      color: "#fff",
    },
    {
      title: "Web Developer",
      year: "2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit aorci. In suscipit quam eget dui auctor.",
      color: "#fff",
    },
    {
      title: "Graduate",
      year: "2011",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit aorci. In suscipit quam eget dui auctor.",
      color: "#fff",
    },
    {
      title: "Born",
      year: "1991",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit aorci. In suscipit quam eget dui auctor.",
      color: "#fff",
    },
  ];
  return (
    <div className={style.container}>
      <div className="row">
        <div className="col-md-12">
          <div className={style.mainTimeline4}>
            {timelineData.map((item, key) => (
              <div key={key} className={style.timeline}>
                <div className={style.timelineContent}>
                  <div className={style.year}>
                    <p className={style.yearText}>{item.year}</p>
                  </div>
                  <div className={style.innerContent}>
                    <h3 className={style.title}>{item.title}</h3>
                    <p className={style.description}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
