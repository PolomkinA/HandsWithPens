module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['images/*.{png,jpg,gif,svg}'],
      dest: 'dist/'
    }]
  }
};