const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVGgVRwaquWkAE/G4E/NiahwgBohAwCSpM+d+nsLtn+mF3tpencHNzz8m55+YHIDlmaIYqMPoBCoqvkKNmyasCgRHQyihCFLRBCDkEI7CfLjdkstV3nQQVU4Hkh8QsL3tJne6t1BnSzF9r7vUkCGf1BTzaoCiPKQ7+UNB3T7dAC/wceYNkp+R43dJztl86k3vf7Rv9Ol6WZ+Js9r79Ah5NRYgpJrFRJChDFKYzVK0hpl+j311pew0rtW0uJolfk2F86RA9j/FiIsrFfTvX+BbJIuoK+dfoGxY8eNuFfHdNdsnloDzwmR3IS9S9U8m5Dn0667cmpDOrbm/0GY4JCu0QEY559WXdFxP/5mdJXrlKcs+O7BBjNjTuPbzWt2tvlncP8W5VyMWN7L9GfHBFia0dpEEsm2itHzcKFRwTO1YX0jJfijMvnq9WvWOwkz8TX9MPr5z/j+6vZppd5oUo8SgpBkurJaFw5nXkvrLd6Ncpc6TQ8u4DhCZfpC/ps6jTRVS+oDgUI00WezjwtxaymHVnVhho4dI+V5Kuf9Id8pL+0dxjtKtXV2m1uQwNcnIzbz23nFdJs2bOvFveLZXrQcFIS2kRtuiJ4qIO6fKURgtv4dtuEMDA3SGXMns7uFxu9OLu8yR+ed7ojCo7BCPh0QYUxZhxCjnOyTOmtAEMrxsUUMSf6gKtM3EqIqn+oZyfTufzNN0JhDmWzS+FppTFer2L0r7qaZnxAtqgoHmAGEOhhRnPabVAjMEYMTD6+3sbEHTnb31r0HpCG0SYMu6RskhzGH409WMTBkFeEr6pSKA3C0TBqPs7jDjHJGaNjCWBNEjwFekJ5AyMIpgy9OuCiKLwPfbrdHMqRBzilIER0FfurR/cxsa6trJ51zTVRazqsQp+o3107U2WCd3NENXT+tW04tLPq3qdGlA9Jp3Km7rZRr9lom3sV07affmHIs95HfY5Vg6yshOH6BANlnS92Z5o/erX1n4fS/Fp0Bvel4rgynoZpvnuZKqvizBVZibD/Lry7ZTszvXSc463lZDLsZCN1ZcGLURXHKDPYGORl7bkuFxkRkuxSqWVxHz+qkfjYS/tHh0P3nkSjw97OWFkpcYLJQiDqjbKC0m1Vr696nVkmAI/xYNJvuwZuGXg+N1P2dPIOAQjIPal4UCWlP5g2B/Jwl/s263pByyKbwRx0AbpW5o4FGVBGvTFoSQNpCaz2fiYjfT9TcJP2zSlm98Io+eIE9gA/jfUmwiNlbqP9qca74/Gvwye5kChIpdbEXS1RJqncMHqvmPGphTJqe71zzGbcqyZ4/MhBI/H9zYoUsijnGZgBCAJaY5D0AY0Lxtv2iTK/wCmq13beFcxhYyrv/3u4gwxDrMCjIRhT1YkQZKUt6w1zQsLsgSMQM9RDj0FtEFWqUWx4ZB/jA9Qn5+xBI+ff/9O6VkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ﮩﮩ٨ـ|AMY|ʙᴏᴜᴊᴇᴇ￼",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "٨ـ♡ﮩ٨ـﮩﮩ٨ـ|AMY|ʙᴏᴜᴊᴇᴇ￼",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

