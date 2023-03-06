/**
 * TITLE	: APLIKASI PENGHITUNG LUAS BANGUN DATAR BERBASIS CONSOLE
 * VERSION	: 1.0
 * AUTHOR	: HARDI DARMAWAN	
 */

// Menggunakan library readline-sync untuk mengambil input dari User
const readline = require('readline-sync');

// Fungsi untuk rumus menghitung luas bangun datar persegi panjang
const luasPersegi = (p, l) => {

	/**
	 * p = Panjang
	 * l = Lebar
	 */

	return p * l;
}

// Fungsi untuk rumus menghitung luas bangun datar lingkaran
const luasLingkaran = (r) => {

	// r = Jari-jari lingkaran

	return 3.14 * r * r;
}

// Fungsi untuk rumus menghitung luas bangun datar segitiga
const luasSegitiga = (a, t) => {

	/**
	 * a = Alas
	 * t = Tinggi
	 */

	return 0.5 * a * t;
}

// Fungsi untuk rumus menghitung luas bangun datar Jajar Genjang
const luasJajarGenjang = (a, t) => {

	/**
	 * a = Alas
	 * t = Tinggi
	 */

	return a * t;
}

// Fungsi untuk membuat garis pembatas
const line = () => {
	console.log('--------------------------------------------');
}

// Fungsi untuk ucapat Terimakasih
const sayThanks = () => {
	line();
	console.log(`(*) TERIMAKASIH... `);
	line();
}

// Fungsi untuk program utama
const hitungLuasApp = () => {

	line();

	// Menu untuk pilihan
	const Menu = ['Hitung Luas Bangun Datar Persegi Panjang', 'Hitung Luas Bangun Datar Lingkaran', 'Hitung Luas Bangun Datar Segitiga', 'Hitung Luas Jajar Genjang', 'Keluar'];

	let number = 1;

	for (let menu of Menu) {

		console.log(`(${number}) ${menu}`);
		number++;
	}

	console.log();

	const pilihan = parseInt(readline.question(' >  Pilihan (n): '));

	// console.log(typeof(pilihan));

	// Proses berdasarkan menu yang dipilih
	if (pilihan === 1) {

		// Proses menghitung luas bangun datar persegi panjang
		line();
		console.log(` >> ${Menu[0]} <<`);
		line();

		const p = readline.question(' >  Panjang = ');
		const l = readline.question(' >  Lebar   = ');

		const hasilLPP = luasPersegi(p, l);

		console.log(`\n -  Luas Persegi Panjang = ${hasilLPP}`);

	} else if (pilihan === 2) {

		// Proses menghitung luas bangun datar lingkaran
		line();
		console.log(` >> ${Menu[1]} <<`);
		line();

		const r = readline.question(' >  Jari - Jari Lingkaran (r) = ');

		const hasilLL = luasLingkaran(r).toFixed(2);

		console.log(`\n -  Luas Lingkaran = ${hasilLL}`);

	} else if (pilihan === 3) {

		// Proses menghitung luas bangun datar segitiga
		line();
		console.log(` >> ${Menu[2]} <<`);
		line();

		const a = readline.question(' >  Alas   = ');
		const t = readline.question(' >  Tinggi = ');

		const hasilLS = luasSegitiga(a, t);

		console.log(`\n -  Luas Segitiga = ${hasilLS}`);

	} else if (pilihan === 4) {

		// Proses menghitung luas bangun datar jajar genjang
		line();
		console.log(` >> ${Menu[3]} <<`);
		line();

		const a = readline.question(' >  Alas   = ');
		const t = readline.question(' >  Tinggi = ');

		const hasilLJG = luasJajarGenjang(a, t);

		console.log(`\n -  Luas Jajar Genjang = ${hasilLJG}`);

	} else if (pilihan === 5) {

		sayThanks();

		process.exit();

	} else {

		// Output bila menu yang dipilih tidak tersedia (Input salah)
		line();
		console.log('(!) Pilihan Tidak Tersedia!');

		hitungLuasApp();

	}

	line()

	offer();
}

// Fungsi untuk membuat tawaran di akhir program
const offer = () => {

	const offering = readline.question('Kembali ke Menu Utama? (y/n): ');

	if (offering === 'y' || offering === 'Y') {

		hitungLuasApp();

	} else if (offering === 'n' || offering === 'N') {

		line();
		console.log(`(*) TERIMAKASIH... `);
		line();

		process.exit();

	} else {

		line()
		console.log('(!) Input Tidak Benar!');
		line()

		offer();
	}
}

line();

// Judul Program
console.log(' >> APLIKASI PENGHITUNG LUAS BANGUN DATAR <<');

// Memanggil fungsi utama program untuk pertama kali
hitungLuasApp();