let phones: Array<string> = [
  "+57-7333333",
  "3108719976",
  "+52-7123789",
  "+1-3108714564",
  "3507192591",
  "+57-3777777",
];

phones.map((p) => {
  return p.includes("-") ? p.slice(p.search("-") + 1) : p;
});
