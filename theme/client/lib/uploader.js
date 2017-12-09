
const openMediaUploader = () => {
  const media_uploader = wp.media({
    frame: 'select',
    // state: 'insert',
    multiple: true,
    type: 'image',
  });

  const promise = new Promise((resolve) => {
    media_uploader.on('insert', () => {
      const json = media_uploader.state().get('selection').toJSON();
      return resolve(json);
    });
  });

  media_uploader.open();

  return promise;
};

const uploader = () => {
  jQuery('.uploader').on('click', (e) => {
		openMediaUploader()
			.then(res => {
        res.map(img => {
          return 
        });
        jQuery(e.currentTarget).val(res.url);
      });
  });
};

export default uploader;
