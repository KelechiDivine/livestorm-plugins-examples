import Livestorm from '@livestorm/plugin'

import App from './src/App'
import SettingsApp from './src/SettingsApp'

Livestorm.register(App)
Livestorm.Settings.register(SettingsApp)