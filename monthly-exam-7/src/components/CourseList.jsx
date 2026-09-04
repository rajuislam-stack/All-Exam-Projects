
export default function CourseList({ courses }) {

  const allCourses = courses.map((course, index) => {
    let courseValue;
    if (index % 2 == 0) courseValue = "Affordable";
    else courseValue = "Best Value";

    return (

      <div className="content" key={course.id}>

        <img src={course.image} alt={course.title} />

        <p id="value">{courseValue}</p>

        <h4>{course.title}</h4>

        <p>
          <b>Instructor: </b> {course.instructor}
        </p>

        <p>
          <b>Lessons:</b> {course.lessons}
        </p>

        <p>
          <b>Duration</b> {course.duration}
        </p>

        <p id="price">
          <b>${course.price}</b>
        </p>

        <p>
          <b>Enroll Now</b>
        </p>
      </div>
    );
  });

  return (
    <div className="main-parent-container">
      <div className="header-section">
        <h1>Available Courses</h1>
        <p>
          Explore our most popular courses and start your learning journey
          today.
        </p>
        <div id="total-course-text">
          <p>Total Courses: 6</p>
        </div>
      </div>

      <div className="content-section">
        {allCourses}
        </div>
    </div>
  );
}
