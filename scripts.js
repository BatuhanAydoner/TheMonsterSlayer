new Vue({
  el: "#app",
  data: {
    playerHealt: 100,
    monsterHealt: 100,
    logs: [],
  },
  methods: {
    newGame: function () {
      this.playerHealt = 100;
      this.monsterHealt = 100;
    },
    attack: function (type) {
      if (type === 0) {
        this.playerHealt = parseInt(
          (this.playerHealt - Math.random() * 11).toFixed(0)
        );
        this.monsterHealt = parseInt(
          (this.monsterHealt - Math.random() * 11).toFixed(0)
        );
      } else {
        this.playerHealt = parseInt(
          (this.playerHealt - Math.random() * 20).toFixed(0)
        );
        this.monsterHealt = parseInt(
          (this.monsterHealt - Math.random() * 20).toFixed(0)
        );
      }

      if (this.playerHealt <= 0 || this.monsterHealt <= 0) {
        alert(
          this.playerHealt > this.monsterHealt ? "Player won." : "Monster won."
        );
        this.playerHealt = 100;
        this.monsterHealt = 100;
      }
    },
    help: function () {
      this.playerHealt = parseInt(
        (parseInt(this.playerHealt) + Math.random() * 21).toFixed(0)
      );

      if (this.playerHealt > 100) {
        this.playerHealt = 100;
      }
    },
  },
});
