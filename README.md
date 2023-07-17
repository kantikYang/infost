# Инфраструктура

Если что-то ломается - тг @ktoSts

- [Деплой тут](https://kantikyang.github.io/infost/)

1. При пуше запускается воркфлоу который проверяет валидность коммит сообщения (используется commitlint из условия)

2. При PR запускаются тесты и линтер (pr-test.yml), также их можно запустить вручную(workflow_dispatch) или вызвать в другом. В настройках ограничение на мерж выставлено.

3. Для процесса релиза нужен пуш с тегом вида v<число>. При этом выполняются все шаги и если создалась новая ветка, то создается issue в котором содержится вся информация. Предусмотрен запуск с одним и тем же тегом.

4. Для деплоя новой версии нужно:

   - зайти в Actions
   - слева в меню workflows выбрать Deploy
   - нажать Run workflow
   - в появившемся окошке выбрать нужную нам версию(ветка релиза по шаблону release-v<число>) и запустить Run workflow.
   - немножко подождать

5. Если все прошло успешно issue закроется

# Условия

1. Настройте линтер для соответствия сообщений о коммитах формату conventional commits

   - можете использовать любой готовый инструмент, например commitlint

2. Настройте автоматический запуск проверок в CI для пулл реквестов

   - обязательно должны запускаться автотесты + опционально можете подключить линтер для кода.
   - проверки должны запускаться автоматом на каждый коммит в PR.
   - результат должен быть виден на странице PR в интерфейсе GitHub.
   - нужно настроить ограничение на мерж изменений, если проверки не прошли.

3. Настройте релизный процесс

   - релиз должен запускаться автоматически при появлении в git нового релизного тега. Считаем тег релизным, если он соответствует маске v<число>.
   - версия релиза должна соответствовать релизному тегу.
   - должен формироваться changelog по истории коммитов от предыдущего релизного тэга.
   - должна создаваться запись в реестре релизов — считаем, что это issue на GitHub с пометкой RELEASE. Там должна сохраняться вся важная информация: автор и дата релиза, номер версии, changelog предусмотрите работу скрипта при многократном запуске с тем же тэгом.
   - должны запускаться проверки, аналогичные PR, а ссылка на результат должна добавляться в реестр релизов.
   - если проверки прошли, приложение выкладывается на gh-pages,а запись должна добавляться в реестр релизов.
   - после этого релизный issue можно автоматом закрывать.

4. Автоматизацию можно настроить через GitHub Actions или другой бесплатный аналог
   - секреты должны храниться защищенно.
