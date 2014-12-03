var info, key, value;

info = {
  name: 'Jamie',
  title: 'Staff Killa',
  motorcycle: 'KTM 990'
};

for (key in info) {
  value = info[key];
  // console.log("" + key + ": " + value);
}
