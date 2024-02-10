import image from "../assets/goat1.png";
import image2 from "../assets/goat2.png";

function AqiqahItems({ paket, jumlah, sate, gule, harga, tambahan }) {
  return (
    <>
      <h1 className="text-center font-bold ">{paket}</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        {jumlah === 1 && (
          <div>
            <img className="" src={image} alt="Makanan" />
          </div>
        )}
        {jumlah === 2 && (
          <div>
            <img className="" src={image2} alt="Makanan" />
          </div>
        )}
        <div className="text-left text-sm">
          {tambahan === true && (
            <div className="text-center text-lg font-bold mb-5">
              <h4>
                {jumlah} Ekor Kambing <br /> <span className="text-red-500">*Kambing dari Pelanggan</span>
              </h4>
            </div>
          )}
          {tambahan === false && (
            <div className="text-center text-lg font-bold mb-5">
              <h4>{jumlah} Kambing Ukuran Besar</h4>
            </div>
          )}
          <div className="text-lg font-light">
            <h4>Acar pedas</h4>
            <h4>Sambal goreng</h4>
            <h4>Sate : {sate} Tusuk + Bumbu Kacang</h4>
            <h4>Gule : {gule}</h4>
            <h4 className="text-xl text-red-600 mt-5 font-bold">Harga : {harga} K</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default AqiqahItems;
