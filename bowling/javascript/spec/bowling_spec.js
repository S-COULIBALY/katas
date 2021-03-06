describe( "Le bowling fonctionnel", function () {
  it("trois quilles tombees vaut trois points", function () {
    expect(calcul_score([3])).toEqual(3);
  });

  it("deux lances trois quilles tombées plus deux quilles tombees", function () {
    expect(calcul_score([3, 2])).toEqual(5);
  });

  it("spare avec six quilles puis quatre quilles", function () {
    expect(calcul_score([6, 4, 2])).toEqual((6 + 4 + 2) + 2);
  });

  it("spare en deuxieme manche", function () {
    expect(calcul_score([3, 2, 6, 4, 2, 1])).toEqual((3 + 2) + (6 + 4 + 2) + (2 + 1));
  });

  it("faux spare a cheval", function () {
    expect(calcul_score([3, 2, 8, 1, 2])).toEqual((3 + 2) + (8 + 1) + 2);
  });

  it("counter strike", function () {
    expect(calcul_score([10, 8, 1])).toEqual((10 + 8 + 1) + (8 + 1));
  });

  it("faux strike à cheval mais vrai spare", function () {
    expect(calcul_score([0, 10, 8, 1])).toEqual((0 + 10 + 8) + (8 + 1));
  });

  it("recette", function () {
    expect(calcul_score([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])).toEqual(10);
    expect(calcul_score([1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3])).toEqual(112);
    expect(calcul_score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(300);
  });

  it("regroupe_par_manche", function () {
    expect(regroupe_par_manche([0])).toEqual([[0]]);
    expect(regroupe_par_manche([0, 1])).toEqual([[0, 1]]);
    expect(regroupe_par_manche([0, 1, 1])).toEqual([[0, 1], [1]]);
    expect(regroupe_par_manche([9, 1, 1])).toEqual([[9, 1], [1]]);
    expect(regroupe_par_manche([10, 1, 1])).toEqual([[10], [1, 1]]);
    expect(regroupe_par_manche([0, 10, 1])).toEqual([[0, 10], [1]]);
  });

  it("return real_position", function () {
    expect(real_position([0], 0)).toEqual(0);
    expect(real_position([0, 1], 0)).toEqual(1);
    expect(real_position([0, 1], 1)).toEqual(0);
    expect(real_position([0, 1, 2], 1)).toEqual(1);
    expect(real_position([0, 1, 2], 0)).toEqual(2);
    expect(real_position([0, 1, 2], 2)).toEqual(0);
  });
});

