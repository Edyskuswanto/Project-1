
import java.util.Scanner;

public class Promo_Toko_Roti{
    public static void main(String[] argas){
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Masukan Nama customer : ");
        String nama = scan.nextLine();
        System.out.print("Masukan umur customer (Tahun) : ");
        int umur = scan.nextInt();
        System.out.print("Masukan berat badan customer (Kg) : ");
        int bb = scan.nextInt();
        System.out.print("Masukan total belanja customer (Rupiah) : Rp.");
        int tb = scan.nextInt();
        int potongan;
        int hasil;
        double diskon = 0;
        
        if(umur > 16 && tb > 50000){
            if(umur <= 25){
                diskon = bb / 10;
            }else if(umur <= 50){
                diskon = bb / 5;
            }else{
                diskon = bb / 2;
            }
                potongan = (int) (diskon / 100 * tb);
                System.out.println("Selamat " + nama + ", anda mendapatkan potongan " + diskon + "% dari Rp." + tb + " csebesar Rp."+ potongan);
        }else{
            potongan = (int) (diskon / 100 * tb);
         System.out.println("Maaf " + nama + "anda tidak mendapatkan potongan harga");   
        }
        
        hasil = tb - potongan;
        System.out.println("===============================================================================================================");
        System.out.println("Nama                : "+nama);
        System.out.println("Umur                : "+umur);
        System.out.println("Berat badan         : "+bb);
        System.out.println("Total belanja       : Rp."+tb);
        System.out.println("Potongan            : Rp."+potongan);
        System.out.println("Yang harus dibayar  : Rp."+hasil);
    }
}
