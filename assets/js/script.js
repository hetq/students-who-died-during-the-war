let start = 0;
let end = 40;
createStudentsBlock(start, end);
let isLoading = false;
$(window).on("scroll", () => {
  if (isLoading == false) {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      start += 40;
      end += 40;
      createStudentsBlock(start, end);
    }
  }
});
function createStudentsBlock(start, end) {
  for (let i = start; i < end; i++) {
    const student = DATA[i];
    let course;
    if (student.course == 1)
      course = `${student.course}-ին`
    else if (student.course == 0)
      course = `${student.course}`
    else
      course = `${student.course}-րդ`
    let imageLink = `${student.name.replace(/\s+/g, " ").trim()}.jpg`;
    const image = isImageExists(`assets/img_/${imageLink}`)
      ? imageLink
      : "male-avatar.png";

    $(`
          <div class="box ${image == "male-avatar.png" ? "avatar" : ""}">   
              <div class="item">
                  <div class="info">
                      <h3>${student.name}</h3>
                      <p> 
                          <span>Սովորել է</span> 
                          <span>
                            ${student.educationalInstitution}${student.course ? 'ի' : ''}
                          </span> 
                          ${student.course ? `<span class="faculty">${student.faculty}ի</span> 
                          <span>${course} կուրսում</span>` : ''}
                          
                      </p>
                  </div>
                  <div 
                      class="photo-box" 
                      style='background-image:url("assets/img_/${image}")'
                  >
                  </div>
              </div>
          </div>
      `).appendTo("#root");
  }
}
function isImageExists(imageUrl) {
  const http = new XMLHttpRequest();
  http.open("HEAD", imageUrl, false);
  http.send();
  return http.status != 404;
}
