$(document).ready(() => {
  DATA.map((i) => {
    const course = i.course == 1 ? `${i.course}֊ին` : `${i.course}֊րդ`;
    $(`
            <div class="box">   
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
                        style='background-image:url("assets/img/${i.name}.jpg")'
                    >
                    </div>
                </div>
            </div>
        `).appendTo("#root");
  });
});
