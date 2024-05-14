test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");

  // Valid Integer to Roman Conversion
  assert.propEqual(convertIntegerToRoman(3), {value: "III", message: "", result: true}, "Valid Integer to Roman Conversion");

  // Integer 0 to Roman Conversion
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "Integer 0 to Roman Conversion");

  // Integer 4000 to Roman Conversion
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "Integer 4000 to Roman Conversion");

  // Invalid Roman to Integer Conversion
  assert.propEqual(convertRomanToInteger("XVX"), {value: 0, message: "Please enter a valid roman", result: false}, "Invalid Roman to Integer Conversion");

  // Valid Roman to Integer Conversion
  assert.propEqual(convertRomanToInteger("MCMLXXVI"), {value: 1976, message: "", result: true}, "Valid Roman to Integer Conversion");

  // Roman Numeral with Invalid Characters
  assert.propEqual(convertRomanToInteger("ABC"), {value: 0, message: "Please enter a valid roman", result: false}, "Roman Numeral with Invalid Characters");

  // Roman Numeral with Non-Integer Value
  assert.propEqual(convertRomanToInteger("VIII.5"), {value: 0, message: "Please enter a valid roman", result: false}, "Roman Numeral with Non-Integer Value");

  // Roman Numeral with Lowercase Characters
  assert.propEqual(convertRomanToInteger("xiv"), {value: 14, message: "", result: true}, "Roman Numeral with Lowercase Characters");

  // Roman Numeral with Leading Zeros
  assert.propEqual(convertRomanToInteger("00XVII"), {value: 0, message: "Please enter a valid roman", result: false}, "Roman Numeral with Leading Zeros");

  // Integer to Roman and Back Conversion (Round Trip)
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: "", result: true}, "Integer to Roman Round Trip");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: "", result: true}, "Roman to Integer Round Trip");
});
