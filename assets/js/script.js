$(document).ready(() => {
  DATA.map((i) => {
    const course = i.course == 1 ? `${i.course}-ին` : `${i.course}-րդ`;
    const image = isImageExists(`assets/img/${i.name}.jpg`)
      ? `${i.name}.jpg`
      : "male-avatar.png";
    $(`
            <div class="box ${image == "male-avatar.png" ? "avatar" : ""}">   
                <div class="item">
                    <div class="info">
                        <h3>${i.name}</h3>
                        <p> 
                            <span>Սովորել է</span> 
                            <span>${i.educationalInstitution}ի</span> 
                            <span class="faculty">${i.faculty}ի</span> 
                            <span>${course} կուրսում</span>
                        </p>
                    </div>
                    <div 
                        class="photo-box" 
                        style='background-image:url("assets/img/${image}")'
                    >
                    </div>
                </div>
            </div>
        `).appendTo("#root");
    console.clear();
  });
});

function isImageExists(imageUrl) {
  const http = new XMLHttpRequest();
  http.open("HEAD", imageUrl, false);
  http.send();
  return http.status != 404;
}
