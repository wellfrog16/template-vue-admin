const mini = {
    toolbar: 'bold | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor | basicDateButton',
    menubar: false,
    plugins: 'lists',
};

const simple = {
    // eslint-disable-next-line
    toolbar: 'undo redo | formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview',
    menubar: false,
    plugins: 'lists link image preview',
};

const standard = {
    // eslint-disable-next-line
    toolbar: 'formatselect | bold | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | forecolor backcolor | removeformat | link image | preview',
    menubar: true,
    plugins: 'lists link image preview table',
};

export default {
    mini,
    simple,
    standard,
};
