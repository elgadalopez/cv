import { Card } from "flowbite-react";
import picture from '../assets/img/Profile.png';

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" class="profile container mt-2 md:mt-5" >
                <div class="flex flex-col-reverse md:flex-row items-center">
                    <div class="w-full md:w-2/3 order-2 md:order-1">
                        <h3 class="font-semibold text-3x1">Hi! I am</h3>
                        <h1 class="font-bold text-3xl nama">Anggara Yogha Prakasa</h1>
                        <p><b>I am a Web developer in Indonesia</b></p>
                        <p><b>Front End And UI/UX Developer</b></p>
                        <p><b>SKILL :</b></p>
                        <p>• HTML</p>
                        <p>• CSS</p>
                        <p>• JavaScript</p>
                        <p>• PHP</p>
                        <p>• Design Web</p>
                        <p><b>Education :</b></p>
                        <p>• TK Kristen Bunda Rina School (2012-2014)</p>
                        <p>• SDN 075 JATAYU (2014-2019)</p>
                        <p>• SMP Ywka Bandung (2020-2023)</p>
                        <p>• SMKS Prakarya Internasional (2023-2026)</p>
                        <p><b>Pengalaman Kerja :</b></p>
                        <p>• Belum Ada Keterangan</p>


                        

                    </div>
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img src={picture} alt="Potrait" class="max-w-full"/>
                    </div>
                </div>
            </section>
        </Card>
    )
}
