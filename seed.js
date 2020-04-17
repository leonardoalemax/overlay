const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter);

db.set('quests', [])
  .write()

db.get('quests')
  .push({
    description: 'Fazer editor se comunicar com o overlay',
    done: false,
  })
  .push({
    description: 'Fazer isso funcionar stand alone!',
    done: true,
  })
  .push({
    description: 'Criar Overlay de stream que mostra o que esta tocando no spotify',
    done: true,
  })
  .push({
    description: 'Prepararando Git',
    done: true,
  })
  .write();