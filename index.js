class Orang {
  constructor(nama, gender){
    this.nama = nama || ""
    this.gender = gender || ""
  }

  gantiNama(namaBaru){
    this.nama = namaBaru
  }
}

class Guru extends Orang {
  constructor(nama, gender, gelar){
    super(nama,gender)
    this.gelar = gelar
  }

  tambahGelar(gelarBaru){
    this.gelar = this.gelar + " ," + gelarBaru
  }
}

class Dosen extends Guru{
  constructor(nama, gender, gelar, mataKuliah){
    super(nama, gender, gelar)
    this.mataKuliah = mataKuliah
  }

  tambahMakul(makulbaru){
    this.mataKuliah = this.mataKuliah + makulbaru
  }
}

const kepalaSekolah = new Guru("joni","Male","s.kom")
kepalaSekolah.tambahGelar("M.Kom")
kepalaSekolah.tambahGelar("prof")
const rektor = new Dosen("joni","Male","s.kom","mtk")

console.log(rektor.mataKuliah);
// console.log(kepalaSekolah.gelar);
// console.log(`${kepalaSekolah.nama} ${kepalaSekolah.gelar} `);
