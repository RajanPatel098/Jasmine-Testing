
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 10000,
      years: 8,
      rate: 6.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('133.86')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values = {
      amount: 14041,
      years: 7,
      rate: 4.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('197.14')
  });
  
  /// etc
  