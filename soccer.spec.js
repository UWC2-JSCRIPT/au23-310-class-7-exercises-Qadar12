describe("Tests for soccer.js", () => {
  describe("Tests for getTotal && orderTeams functions ", () => {
    it("getTotal: test winning record ", () => {
      const winResult = getTotalPoints("wwwwdd");

      expect(winResult).toEqual(14);
    });
    it("getTotal: test losing record", () => {
      const loseResult = getTotalPoints("llllld");

      expect(loseResult).toEqual(1);
    });
    it("orderTeams: test an empty array ", () => {
      const emptyTeamArray = [];
      const standingsString = orderTeams(...emptyTeamArray);
      expect(standingsString).toBe("");
    });

    it("orderTeams: test one object in the array ", () => {
      const oneTeamArray = [{ name: "Sounders", results: "wwlwdd" }];
      const oneString = orderTeams(...oneTeamArray);
      expect(oneString).toBe("Sounders: 11");
    });

    it("orderTeams: test tie condtion", () => {
      const tieTeamArray = [
        { name: "Sounders", results: "wwlwdd" },
        { name: "Timber", results: "wwlwdd" },
      ];
      const tieString = orderTeams(...tieTeamArray);
      expect(tieString).toBe("Sounders: 11\nTimber: 11");
    });
  });
});
