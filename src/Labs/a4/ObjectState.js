import React, { useState } from "react";
function ObjectState() {
  const [course, setScourse] = useState({
    title: "React",
    modules: 5,
    isPublished: true,
    startDate: new Date(),
  });
  //   const handleTitleChange = (event) => {
  //     setScourse({ ...course, title: event.target.value });
  //   };
  //   const handleModulesChange = (event) => {
  //     setScourse({ ...course, modules: event.target.value });
  //   };
  //   const handlePublishedChange = (event) => {
  //     setScourse({ ...course, isPublished: event.target.checked });
  //   };
  return (
    <div>
      <h2>Object State</h2>
      <input
        value={course.title}
        onChange={(e) => setScourse({ ...course, title: e.target.value })}
        className="form-control"
      />
      <input
        value={course.modules}
        onChange={(e) => setScourse({ ...course, modules: e.target.value })}
        className="form-control"
      />
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
}
export default ObjectState;
