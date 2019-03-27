const mini = {
    toolbar: 'bold | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor | basicDateButton',
    menubar: false,
    plugins: 'lists',
};

const simple = {
    // eslint-disable-next-line
    toolbar: 'undo redo | formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview',
    menubar: false,
    plugins: 'lists link image preview imagetools',
};

const standard = {
    // eslint-disable-next-line
    toolbar: 'formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview',
    menubar: true,
    plugins: 'lists link image preview table',
};

const full = {
    // eslint-disable-next-line
    toolbar: 'formatselect | code | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
    menubar: true,
    // eslint-disable-next-line
    plugins: 'code print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
    image_advtab: true,
    image_caption: true,
};

export default {
    mini,
    simple,
    standard,
    full,
};
