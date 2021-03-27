new Vue({
  el: "#app",
  data: {
    started: false,
    playerHealth: 100,
    monsterHealth: 100,
    logs: [],
  },
  methods: {
    newGame: function () {
      this.started = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    attack: function (type) {
      this.started = true;
      let playerDamage = 0;
      let monsterDamage = 0;
      if (type === 0) {
        playerDamage = Math.random() * 11;
        monsterDamage = Math.random() * 11;
        this.playerHealth = parseInt(
          (this.playerHealth - monsterDamage).toFixed(0)
        );
        this.monsterHealth = parseInt(
          (this.monsterHealth - playerDamage).toFixed(0)
        );
      } else {
        playerDamage = Math.random() * 20;
        monsterDamage = Math.random() * 20;
        this.playerHealth = parseInt(
          (this.playerHealth - monsterDamage).toFixed(0)
        );
        this.monsterHealth = parseInt(
          (this.monsterHealth - playerDamage).toFixed(0)
        );
      }

      this.logs.push({
        player: `YOUR DAMAGE: (${playerDamage.toFixed(0)})`,
        monster: `MONTER'S DAMAGE: (${monsterDamage.toFixed(0)})`,
      });

      if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
        alert(
          this.playerHealth > this.monsterHealth
            ? "Player won."
            : "Monster won."
        );
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.logs = [];
      }
    },
    help: function () {
      this.playerHealth = parseInt(
        (parseInt(this.playerHealth) + Math.random() * 21).toFixed(0)
      );

      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
    },
    giveUp: function () {
      alert("Game Over");
      this.started = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
  },
});
