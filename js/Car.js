AFRAME.registerComponent("car-model", {
  schema: {
    model: { type: "string", default: "./tinker.obj" }
  },
  init: function() {
    this.el.getAttribute("gltf-model", this.data.model);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
