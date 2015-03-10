var Bookmark = require('../bookmark.js');

Bookmark.find({}, function(err, documents){
  if(documents.length === 0){
    // Prefill the empty database with some Beer

    var google = new Bookmark({
      name: 'Google',
      url: 'http://google.com',
      tags: 'research',
      addDate: Date.now()
    });
    google.save();

    var cdnjs = new Bookmark({
      name: 'cdnjs',
      url: 'http://cdnjs.com',
      tags: 'code',
      addDate: Date.now()
    });
    cdnjs.save();

    var evil = new Bookmark({
      name: 'Evil Icons',
      url: 'http://evil-icons.io',
      tags: 'design',
      addDate: Date.now()
    });
    evil.save();

  }
});
