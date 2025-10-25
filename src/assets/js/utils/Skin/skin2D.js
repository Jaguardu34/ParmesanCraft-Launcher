/**
 * @author Luuxis
 * Modifié par Lucas
 * Luuxis License v1.0 (voir fichier LICENSE pour les détails en FR/EN)
 */
const nodeFetch = require('node-fetch');

export class skin2D {
    /**
     * Crée une texture de tête 2D à partir du pseudo Minecraft.
     * @param {string} username - Le pseudo Minecraft.
     * @returns {Promise<string>} - Retourne un DataURL de la tête.
     */
    async creatHeadTexture(username) {
        const skinUrl = `https://skinmc.net/skin/${username}/download`;
        let image = await getData(skinUrl);

        return await new Promise((resolve) => {
            image.addEventListener('load', e => {
                let cvs = document.createElement('canvas');
                cvs.width = 8;
                cvs.height = 8;
                let ctx = cvs.getContext('2d');

                // Visage avant (x=8,y=8), couche extérieure (x=40,y=8)
                ctx.drawImage(image, 8, 8, 8, 8, 0, 0, 8, 8);
                ctx.drawImage(image, 40, 8, 8, 8, 0, 0, 8, 8);

                return resolve(cvs.toDataURL());
            });
        });
    }
}

async function getData(url) {
    // Télécharge le skin depuis SkinMC et convertit en base64 pour l’utiliser comme image
    let response = await nodeFetch(url);
    if (!response.ok) throw new Error(`Erreur lors du chargement du skin: ${response.statusText}`);
    let buffer = await response.buffer();
    let data = `data:image/png;base64,${buffer.toString('base64')}`;

    let img = new Image();
    img.src = data;
    return img;
}
