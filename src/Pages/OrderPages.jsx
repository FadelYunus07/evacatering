import React, { useState } from "react";

function OrderPages() {
  const [orderType, setOrderType] = useState("aqiqah");
  const [formData, setFormData] = useState({
    name: "",
    order: "",
    paket: "",
    menu: "",
    jumlah: "",
    tgl: "",
  });

  const handleOrderChange = (e) => {
    setOrderType(e.target.value);
    setFormData({ ...formData, order: e.target.value });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { name, order, paket, menu, jumlah, tgl } = formData;

    // Check if required fields are filled
    if (!name || !order || !tgl) {
      alert("Harap lengkapi semua kolom yang wajib diisi.");
      return;
    }

    // Additional validation for 'katering' order type
    if (order === "katering" && !jumlah) {
      alert("Harap isi jumlah kotak untuk pesanan katering.");
      return;
    }

    // Construct message based on order type
    let message = `Perkenalkan Nama saya ${name}%0aSaya ingin pesan ${order} ${paket} ${menu} untuk tanggal ${tgl}%0aApakah bisa ?`;

    // Include 'jumlah' only if 'katering' is selected
    if (order === "katering" && jumlah) {
      message += `%0aJumlah kotak: ${jumlah}`;
    }

    const whatsappLink = `https://wa.me/6285774179312?text=${message}`;

    // Display confirmation message
    if (window.confirm("Apakah Anda yakin ingin mengirim pesan?")) {
      // Open WhatsApp link in a new tab
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <div className="w-full lg:h-screen md:pb-[4%] bg-gradient-to-b lg:pb-[1%] pb-5 from-[#F3B664] to-[#EC8F5E] flex justify-center items-center">
      <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-2xl rounded-lg p-8 text-gray-600 md:w-[50%] w-[80%] text-center">
        <h1 className="md:text-4xl text-xl md:mb-6">Form Order</h1>
        <form className="text-left">
          <div className="mb-4">
            <label htmlFor="name">Nama Lengkap :</label>
            <input type="text" required className="border p-2 w-full text-white rounded-lg" placeholder="Nama Lengkap" name="name" onChange={handleInputChange} />
          </div>

          <div className="mb-4">
            <label htmlFor="order">Pesan :</label>
            <select name="order" id="order" required onChange={handleOrderChange} className="border p-2 w-full text-white rounded-lg">
              <option value="">-- Pilih --</option>
              <option value="aqiqah">AQIQAH</option>
              <option value="katering">KATERING</option>
            </select>
          </div>

          {orderType === "aqiqah" && (
            <div className="mb-4">
              <label htmlFor="paket">Paket :</label>
              <select name="paket" id="paket" required onChange={handleInputChange} className="border p-2 w-full text-white rounded-lg">
                <option value="">-- Pilih --</option>
                <option value="Paket 1 (Kambing dari pelanggan)">Paket 1 #1 Kambing dari Pelanggan#</option>
                <option value="Paket 2 (Kambing dari pelanggan)">Paket 2 #2 Kambing dari Pelanggan#</option>
                <option value="Paket 3">Paket 3 #1 Kambing#</option>
                <option value="Paket 4">Paket 4 #2 Kambing#</option>
              </select>
            </div>
          )}

          {orderType === "katering" && (
            <div className="mb-4">
              <label htmlFor="Menu">Menu :</label>
              <input type="text" required className="border mb-4 p-2 w-full text-white rounded-lg" placeholder="Contoh: Nasi Kebuli" name="menu" onChange={handleInputChange} />
              <label htmlFor="jumlah" className="mt-2">
                Jumlah :
              </label>
              <input type="number" required className="border p-2 w-full text-white rounded-lg" placeholder="jumlah kotak" name="jumlah" onChange={handleInputChange} />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="tanggal dan waktu">Tanggal dan Waktu :</label>
            <input type="date" id="tgl" required name="tgl" onChange={handleInputChange} className="border p-2 w-full text-white rounded-lg" />
          </div>
        </form>
        <p className="text-red-500 mb-6">*Note: Pemesanan hanya dapat dilakukan 7 hari sebelum acara</p>
        <button onClick={handleSendMessage} type="submit" className="p-3 bg-green-600 rounded-full text-white">
          <i className="fa-brands fa-whatsapp pe-3"></i>Pesan Sekarang
        </button>
      </div>
    </div>
  );
}

export default OrderPages;
