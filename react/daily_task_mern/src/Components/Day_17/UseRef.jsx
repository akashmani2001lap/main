import { useRef } from "react";

const UseRef = () => {
  const nameref = useRef(null);
  const showNameref = useRef(null);

  const ageref = useRef(null);
  const showAgeref = useRef(null);

  const emailref = useRef(null);
  const showEmailref = useRef(null);

  const phoneNumberref = useRef(null);
  const showPhoneNumberref = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const bannerRef = useRef(null);

  const handleChangeName = () => {
    showNameref.current.innerHTML = nameref.current.value;
  };

  const handleChangeAge = () => {
    showAgeref.current.innerHTML = ageref.current.value;
  };

  const handleChnageEmail = () => {
    showEmailref.current.innerHTML = emailref.current.value;
  };

  const handleClickPhonenumber = () => {
    const phoneNumber = phoneNumberref.current.value;
    showPhoneNumberref.current.innerHTML = phoneNumber;
  };

  const handleHomeUseRef = () => {
    homeRef.current.scrollIntoView();
  };

  const handleAboutUseRef = () => {
    aboutRef.current.scrollIntoView();
  };

  const handleContactUseRef = () => {
    contactRef.current.scrollIntoView();
  };

  const handleBannerUseRef = () => {
    bannerRef.current.scrollIntoView();
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold text-white">UseRef Demo</h1>

          <div className="flex gap-6">
            <button
              onClick={handleHomeUseRef}
              className="text-white hover:text-cyan-400 duration-300"
            >
              Home
            </button>

            <button
              onClick={handleAboutUseRef}
              className="text-white hover:text-cyan-400 duration-300"
            >
              About
            </button>

            <button
              onClick={handleContactUseRef}
              className="text-white hover:text-cyan-400 duration-300"
            >
              Contact
            </button>

            <button
              onClick={handleBannerUseRef}
              className="text-white hover:text-cyan-400 duration-300"
            >
              Banner
            </button>
          </div>
        </div>
      </div>
      <section ref={bannerRef}>
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-slate-900 to-black flex items-center justify-center p-8">
          <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
            {/* Input Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
                User Details
              </h1>

              <div className="space-y-6">
                <input
                  type="text"
                  ref={nameref}
                  placeholder="Enter your Name"
                  onChange={handleChangeName}
                  className="w-full p-4 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 transition-all"
                />

                <input
                  type="number"
                  ref={ageref}
                  placeholder="Enter your Age"
                  onChange={handleChangeAge}
                  className="w-full p-4 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 transition-all"
                />

                <input
                  type="email"
                  ref={emailref}
                  placeholder="Enter your Email"
                  onChange={handleChnageEmail}
                  className="w-full p-4 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 transition-all"
                />

                <input
                  type="text"
                  ref={phoneNumberref}
                  placeholder="Enter your Phone Number"
                  className="w-full p-4 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-600 transition-all"
                />

                <button
                  onClick={handleClickPhonenumber}
                  className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                >
                  Show Number
                </button>
              </div>
            </div>

            {/* Preview Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
                Live Preview
              </h1>

              <div className="space-y-6">
                <div className="bg-gray-100 rounded-xl p-5">
                  <h3 className="text-gray-500 font-semibold mb-2">👤 Name</h3>
                  <p
                    ref={showNameref}
                    className="text-2xl font-bold text-gray-800"
                  ></p>
                </div>

                <div className="bg-gray-100 rounded-xl p-5">
                  <h3 className="text-gray-500 font-semibold mb-2">🎂 Age</h3>
                  <p
                    ref={showAgeref}
                    className="text-2xl font-bold text-gray-800"
                  ></p>
                </div>

                <div className="bg-gray-100 rounded-xl p-5">
                  <h3 className="text-gray-500 font-semibold mb-2">📧 Email</h3>
                  <p
                    ref={showEmailref}
                    className="text-2xl font-bold text-gray-800 break-all"
                  ></p>
                </div>

                <div className="bg-gray-100 rounded-xl p-5 mt-5">
                  <h3 className="text-gray-500 font-semibold mb-2">
                    Phone Number
                  </h3>

                  <p
                    ref={showPhoneNumberref}
                    className="text-2xl font-bold text-gray-800"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={homeRef}
        className="min-h-screen bg-slate-100 flex items-center justify-center px-10 py-20"
      >
        <div className="max-w-6xl bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-5xl font-bold mb-8 text-indigo-700">Home</h2>
          <p className="leading-9 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            temporibus ullam, quia velit soluta explicabo et natus consectetur
            quasi excepturi! Cupiditate quae suscipit fugiat omnis nam
            perferendis beatae quidem velit? Dignissimos nesciunt voluptatibus
            quam iste sapiente doloremque quaerat id incidunt vel sed deleniti
            vitae commodi dolor accusamus totam voluptate possimus minima
            impedit hic consequuntur perspiciatis, dolore iure earum fuga.
            Autem! Hic dolore molestias sapiente minus. Maxime pariatur neque
            suscipit aut nobis, voluptatum, illo molestiae possimus vero iure
            rerum expedita perferendis soluta molestias aliquid? Ratione
            provident expedita minima laboriosam enim nemo! Nihil magnam
            possimus repudiandae quibusdam! Sint expedita dolorum veniam nobis!
            Sequi quae quibusdam, cum hic consequatur impedit nam neque nisi
            consequuntur. Laborum eligendi, expedita rem repellat quo voluptas
            nisi sit. Odit earum quae voluptatum tenetur aperiam neque ratione
            facilis, veritatis quod. Porro saepe quas neque eaque placeat
            tenetur nesciunt distinctio, qui, veritatis, deserunt consequuntur
            inventore natus error at sequi odio? Nostrum doloremque, accusantium
            harum quasi sequi maiores assumenda natus voluptatibus, impedit
            sapiente veritatis soluta. Reiciendis quidem saepe laborum, odio
            ducimus exercitationem, distinctio nihil quaerat commodi cum
            consequatur delectus? Praesentium, repellat! Voluptas, non nesciunt
            omnis temporibus voluptatibus ipsam provident laborum repellendus
            earum, alias sunt saepe quo, consectetur vel delectus quod. Harum
            assumenda maxime dolores ipsa quod obcaecati enim commodi. Quas,
            eligendi! Reiciendis explicabo ipsum deserunt porro autem iusto
            repellat voluptatem molestias iure molestiae minus, praesentium
            laboriosam, nulla odio? Recusandae impedit quod ut, ipsa et voluptas
            repellendus odio cupiditate facere saepe reiciendis? Asperiores
            neque dolore maxime obcaecati, blanditiis in, quas totam eius
            adipisci atque nostrum sunt ipsum libero praesentium temporibus
            corrupti repudiandae deserunt. Consequuntur ipsam nobis iure? Est
            provident architecto numquam rerum. Voluptate aliquam exercitationem
            provident commodi error eaque natus unde aperiam, qui modi!
            Consectetur quia, perspiciatis delectus eveniet eum temporibus optio
            magnam animi maxime, velit, quam neque vitae magni ea id. Ex dolore
            nobis blanditiis fugiat id natus quasi, eos veniam impedit
            voluptatem inventore error maxime! Esse numquam ex perferendis,
            molestias, labore sed optio cumque vero nostrum corporis, obcaecati
            nesciunt consectetur? Eius quidem veniam minus cum nulla. Ipsa
            tenetur dignissimos soluta possimus magni, ratione, ex fuga facere
            eligendi ab similique velit quisquam quibusdam laboriosam quia alias
            quidem! Ipsum et enim fugiat? Consequuntur doloribus eum labore quos
            perferendis beatae a dolore, magni, consectetur saepe omnis unde ut
            mollitia optio natus ducimus cumque quasi officia reiciendis dolor
            maxime architecto molestias veniam similique! Officiis. Facere
            provident amet quaerat tempore rem omnis iste repellendus, quam, in
            consequatur repudiandae. Earum optio, molestiae vel incidunt
            doloremque nesciunt deleniti. Dolorum aliquid id quis dolorem
            officiis nemo, ducimus fugiat? Quos, dolores blanditiis vel autem
            officiis esse architecto possimus voluptates veniam rem sit
            dignissimos aliquam vero velit maiores! Laudantium, autem. Ducimus
            libero quod eius magni minus, non tempora vero quam! Beatae
            molestias quaerat voluptatibus deleniti incidunt corporis ipsam, aut
            sequi est. Eligendi officia, aliquid hic impedit libero corrupti
            nisi eos corporis error cumque, exercitationem tempora vero,
            delectus ullam sint at! Nesciunt facilis alias dolore. Tempora
            sapiente consequatur animi facilis iusto dicta error, quo sunt quod!
            Obcaecati, magni voluptatibus ullam libero culpa voluptate earum,
            facere eligendi officiis fugit dolorem, laudantium vero. Est debitis
            soluta sapiente sequi fuga, incidunt beatae, dicta, adipisci fugit
            aspernatur nemo maxime ipsum impedit. Quibusdam repudiandae aliquid,
            doloribus natus, minus in sunt doloremque quia ipsum temporibus
            debitis expedita! Recusandae, totam, vitae suscipit consequatur
            repellat atque non odit architecto aut fugit, hic autem? Eaque saepe
            consectetur repudiandae delectus quo esse aut praesentium nostrum
            excepturi reiciendis, assumenda mollitia rem nulla! Ut nam deleniti
            iusto praesentium repudiandae voluptates saepe quod officia atque
            dicta quae, non cupiditate quibusdam accusantium. Voluptates
            nesciunt veniam libero adipisci, repellat ipsum voluptas, delectus
            nam magnam quo odit. Assumenda, odio facilis? Totam officiis
            placeat, quo adipisci unde odio labore porro! Impedit dignissimos
            qui tempora deleniti aperiam eveniet repellendus eligendi neque.
            Obcaecati sit, ad autem aliquid nesciunt architecto error! Eligendi
            debitis id qui distinctio animi, commodi cum quam beatae unde
            tenetur voluptas tempore! Consequatur est amet praesentium numquam
            provident ratione consectetur quia quibusdam ipsam, dignissimos
            tempore, totam, a voluptatem? Nihil eius sit iure quae ratione ea
            hic suscipit doloremque mollitia atque qui error dolorem voluptas
            harum nulla tempore deserunt odit, cupiditate esse, commodi ab
            magni, quam dolore vitae. Velit. Eaque placeat odio dolorum tempora
            est voluptates distinctio deleniti suscipit! Commodi et earum nemo
            pariatur quis non aut ratione reprehenderit harum sapiente velit,
            quibusdam fugit, libero necessitatibus veniam cum voluptatibus.
            Nihil ducimus laboriosam laudantium doloremque corrupti fuga ab est
            atque nisi eius dicta, nemo error, culpa accusamus eveniet neque
            itaque assumenda velit adipisci ipsam magnam delectus eaque sed quo.
            Esse! Placeat velit temporibus reprehenderit cum beatae eaque
            accusamus magnam architecto provident non iusto qui praesentium
            sunt, aut fugit at nulla voluptas quis, labore consequatur ratione.
            Culpa libero deleniti voluptates ducimus! Excepturi tempora error
            laudantium aliquam voluptate, dolorem neque dolorum nisi quaerat
            facilis eos natus? Numquam porro ducimus, molestiae quas, commodi
            eius quisquam optio libero iusto aperiam temporibus saepe corrupti
            autem? Assumenda obcaecati tempora eos? Aspernatur a commodi quos
            incidunt suscipit est dolore saepe sapiente laborum delectus illum
            itaque dignissimos in accusamus consequuntur ut accusantium quod
            optio, quisquam facilis aut tempora! Molestiae pariatur asperiores,
            debitis iure excepturi blanditiis aut rerum consectetur quaerat amet
            laborum veritatis, nobis porro repellat ut deserunt, vero eaque
            suscipit id voluptatem sed sit. Cumque eos obcaecati id. Eaque
            excepturi ipsum voluptate nostrum molestias vero quis voluptas
            tempore, corrupti odit quasi eligendi sunt accusamus, at, blanditiis
            iusto sequi. Ratione quasi tenetur quis dolor quia illum aliquid
            quibusdam optio.
          </p>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="min-h-screen bg-slate-100 flex items-center justify-center px-10 py-20"
      >
        <div className="max-w-6xl bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-5xl font-bold mb-8 text-indigo-700">About</h2>
          <p className="leading-9 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            temporibus ullam, quia velit soluta explicabo et natus consectetur
            quasi excepturi! Cupiditate quae suscipit fugiat omnis nam
            perferendis beatae quidem velit? Dignissimos nesciunt voluptatibus
            quam iste sapiente doloremque quaerat id incidunt vel sed deleniti
            vitae commodi dolor accusamus totam voluptate possimus minima
            impedit hic consequuntur perspiciatis, dolore iure earum fuga.
            Autem! Hic dolore molestias sapiente minus. Maxime pariatur neque
            suscipit aut nobis, voluptatum, illo molestiae possimus vero iure
            rerum expedita perferendis soluta molestias aliquid? Ratione
            provident expedita minima laboriosam enim nemo! Nihil magnam
            possimus repudiandae quibusdam! Sint expedita dolorum veniam nobis!
            Sequi quae quibusdam, cum hic consequatur impedit nam neque nisi
            consequuntur. Laborum eligendi, expedita rem repellat quo voluptas
            nisi sit. Odit earum quae voluptatum tenetur aperiam neque ratione
            facilis, veritatis quod. Porro saepe quas neque eaque placeat
            tenetur nesciunt distinctio, qui, veritatis, deserunt consequuntur
            inventore natus error at sequi odio? Nostrum doloremque, accusantium
            harum quasi sequi maiores assumenda natus voluptatibus, impedit
            sapiente veritatis soluta. Reiciendis quidem saepe laborum, odio
            ducimus exercitationem, distinctio nihil quaerat commodi cum
            consequatur delectus? Praesentium, repellat! Voluptas, non nesciunt
            omnis temporibus voluptatibus ipsam provident laborum repellendus
            earum, alias sunt saepe quo, consectetur vel delectus quod. Harum
            assumenda maxime dolores ipsa quod obcaecati enim commodi. Quas,
            eligendi! Reiciendis explicabo ipsum deserunt porro autem iusto
            repellat voluptatem molestias iure molestiae minus, praesentium
            laboriosam, nulla odio? Recusandae impedit quod ut, ipsa et voluptas
            repellendus odio cupiditate facere saepe reiciendis? Asperiores
            neque dolore maxime obcaecati, blanditiis in, quas totam eius
            adipisci atque nostrum sunt ipsum libero praesentium temporibus
            corrupti repudiandae deserunt. Consequuntur ipsam nobis iure? Est
            provident architecto numquam rerum. Voluptate aliquam exercitationem
            provident commodi error eaque natus unde aperiam, qui modi!
            Consectetur quia, perspiciatis delectus eveniet eum temporibus optio
            magnam animi maxime, velit, quam neque vitae magni ea id. Ex dolore
            nobis blanditiis fugiat id natus quasi, eos veniam impedit
            voluptatem inventore error maxime! Esse numquam ex perferendis,
            molestias, labore sed optio cumque vero nostrum corporis, obcaecati
            nesciunt consectetur? Eius quidem veniam minus cum nulla. Ipsa
            tenetur dignissimos soluta possimus magni, ratione, ex fuga facere
            eligendi ab similique velit quisquam quibusdam laboriosam quia alias
            quidem! Ipsum et enim fugiat? Consequuntur doloribus eum labore quos
            perferendis beatae a dolore, magni, consectetur saepe omnis unde ut
            mollitia optio natus ducimus cumque quasi officia reiciendis dolor
            maxime architecto molestias veniam similique! Officiis. Facere
            provident amet quaerat tempore rem omnis iste repellendus, quam, in
            consequatur repudiandae. Earum optio, molestiae vel incidunt
            doloremque nesciunt deleniti. Dolorum aliquid id quis dolorem
            officiis nemo, ducimus fugiat? Quos, dolores blanditiis vel autem
            officiis esse architecto possimus voluptates veniam rem sit
            dignissimos aliquam vero velit maiores! Laudantium, autem. Ducimus
            libero quod eius magni minus, non tempora vero quam! Beatae
            molestias quaerat voluptatibus deleniti incidunt corporis ipsam, aut
            sequi est. Eligendi officia, aliquid hic impedit libero corrupti
            nisi eos corporis error cumque, exercitationem tempora vero,
            delectus ullam sint at! Nesciunt facilis alias dolore. Tempora
            sapiente consequatur animi facilis iusto dicta error, quo sunt quod!
            Obcaecati, magni voluptatibus ullam libero culpa voluptate earum,
            facere eligendi officiis fugit dolorem, laudantium vero. Est debitis
            soluta sapiente sequi fuga, incidunt beatae, dicta, adipisci fugit
            aspernatur nemo maxime ipsum impedit. Quibusdam repudiandae aliquid,
            doloribus natus, minus in sunt doloremque quia ipsum temporibus
            debitis expedita! Recusandae, totam, vitae suscipit consequatur
            repellat atque non odit architecto aut fugit, hic autem? Eaque saepe
            consectetur repudiandae delectus quo esse aut praesentium nostrum
            excepturi reiciendis, assumenda mollitia rem nulla! Ut nam deleniti
            iusto praesentium repudiandae voluptates saepe quod officia atque
            dicta quae, non cupiditate quibusdam accusantium. Voluptates
            nesciunt veniam libero adipisci, repellat ipsum voluptas, delectus
            nam magnam quo odit. Assumenda, odio facilis? Totam officiis
            placeat, quo adipisci unde odio labore porro! Impedit dignissimos
            qui tempora deleniti aperiam eveniet repellendus eligendi neque.
            Obcaecati sit, ad autem aliquid nesciunt architecto error! Eligendi
            debitis id qui distinctio animi, commodi cum quam beatae unde
            tenetur voluptas tempore! Consequatur est amet praesentium numquam
            provident ratione consectetur quia quibusdam ipsam, dignissimos
            tempore, totam, a voluptatem? Nihil eius sit iure quae ratione ea
            hic suscipit doloremque mollitia atque qui error dolorem voluptas
            harum nulla tempore deserunt odit, cupiditate esse, commodi ab
            magni, quam dolore vitae. Velit. Eaque placeat odio dolorum tempora
            est voluptates distinctio deleniti suscipit! Commodi et earum nemo
            pariatur quis non aut ratione reprehenderit harum sapiente velit,
            quibusdam fugit, libero necessitatibus veniam cum voluptatibus.
            Nihil ducimus laboriosam laudantium doloremque corrupti fuga ab est
            atque nisi eius dicta, nemo error, culpa accusamus eveniet neque
            itaque assumenda velit adipisci ipsam magnam delectus eaque sed quo.
            Esse! Placeat velit temporibus reprehenderit cum beatae eaque
            accusamus magnam architecto provident non iusto qui praesentium
            sunt, aut fugit at nulla voluptas quis, labore consequatur ratione.
            Culpa libero deleniti voluptates ducimus! Excepturi tempora error
            laudantium aliquam voluptate, dolorem neque dolorum nisi quaerat
            facilis eos natus? Numquam porro ducimus, molestiae quas, commodi
            eius quisquam optio libero iusto aperiam temporibus saepe corrupti
            autem? Assumenda obcaecati tempora eos? Aspernatur a commodi quos
            incidunt suscipit est dolore saepe sapiente laborum delectus illum
            itaque dignissimos in accusamus consequuntur ut accusantium quod
            optio, quisquam facilis aut tempora! Molestiae pariatur asperiores,
            debitis iure excepturi blanditiis aut rerum consectetur quaerat amet
            laborum veritatis, nobis porro repellat ut deserunt, vero eaque
            suscipit id voluptatem sed sit. Cumque eos obcaecati id. Eaque
            excepturi ipsum voluptate nostrum molestias vero quis voluptas
            tempore, corrupti odit quasi eligendi sunt accusamus, at, blanditiis
            iusto sequi. Ratione quasi tenetur quis dolor quia illum aliquid
            quibusdam optio.
          </p>
        </div>
      </section>

      <section
        ref={contactRef}
        className="min-h-screen bg-slate-100 flex items-center justify-center px-10 py-20"
      >
        <div className="max-w-6xl bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-5xl font-bold mb-8 text-indigo-700">Contact</h2>
          <p className="leading-9 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            temporibus ullam, quia velit soluta explicabo et natus consectetur
            quasi excepturi! Cupiditate quae suscipit fugiat omnis nam
            perferendis beatae quidem velit? Dignissimos nesciunt voluptatibus
            quam iste sapiente doloremque quaerat id incidunt vel sed deleniti
            vitae commodi dolor accusamus totam voluptate possimus minima
            impedit hic consequuntur perspiciatis, dolore iure earum fuga.
            Autem! Hic dolore molestias sapiente minus. Maxime pariatur neque
            suscipit aut nobis, voluptatum, illo molestiae possimus vero iure
            rerum expedita perferendis soluta molestias aliquid? Ratione
            provident expedita minima laboriosam enim nemo! Nihil magnam
            possimus repudiandae quibusdam! Sint expedita dolorum veniam nobis!
            Sequi quae quibusdam, cum hic consequatur impedit nam neque nisi
            consequuntur. Laborum eligendi, expedita rem repellat quo voluptas
            nisi sit. Odit earum quae voluptatum tenetur aperiam neque ratione
            facilis, veritatis quod. Porro saepe quas neque eaque placeat
            tenetur nesciunt distinctio, qui, veritatis, deserunt consequuntur
            inventore natus error at sequi odio? Nostrum doloremque, accusantium
            harum quasi sequi maiores assumenda natus voluptatibus, impedit
            sapiente veritatis soluta. Reiciendis quidem saepe laborum, odio
            ducimus exercitationem, distinctio nihil quaerat commodi cum
            consequatur delectus? Praesentium, repellat! Voluptas, non nesciunt
            omnis temporibus voluptatibus ipsam provident laborum repellendus
            earum, alias sunt saepe quo, consectetur vel delectus quod. Harum
            assumenda maxime dolores ipsa quod obcaecati enim commodi. Quas,
            eligendi! Reiciendis explicabo ipsum deserunt porro autem iusto
            repellat voluptatem molestias iure molestiae minus, praesentium
            laboriosam, nulla odio? Recusandae impedit quod ut, ipsa et voluptas
            repellendus odio cupiditate facere saepe reiciendis? Asperiores
            neque dolore maxime obcaecati, blanditiis in, quas totam eius
            adipisci atque nostrum sunt ipsum libero praesentium temporibus
            corrupti repudiandae deserunt. Consequuntur ipsam nobis iure? Est
            provident architecto numquam rerum. Voluptate aliquam exercitationem
            provident commodi error eaque natus unde aperiam, qui modi!
            Consectetur quia, perspiciatis delectus eveniet eum temporibus optio
            magnam animi maxime, velit, quam neque vitae magni ea id. Ex dolore
            nobis blanditiis fugiat id natus quasi, eos veniam impedit
            voluptatem inventore error maxime! Esse numquam ex perferendis,
            molestias, labore sed optio cumque vero nostrum corporis, obcaecati
            nesciunt consectetur? Eius quidem veniam minus cum nulla. Ipsa
            tenetur dignissimos soluta possimus magni, ratione, ex fuga facere
            eligendi ab similique velit quisquam quibusdam laboriosam quia alias
            quidem! Ipsum et enim fugiat? Consequuntur doloribus eum labore quos
            perferendis beatae a dolore, magni, consectetur saepe omnis unde ut
            mollitia optio natus ducimus cumque quasi officia reiciendis dolor
            maxime architecto molestias veniam similique! Officiis. Facere
            provident amet quaerat tempore rem omnis iste repellendus, quam, in
            consequatur repudiandae. Earum optio, molestiae vel incidunt
            doloremque nesciunt deleniti. Dolorum aliquid id quis dolorem
            officiis nemo, ducimus fugiat? Quos, dolores blanditiis vel autem
            officiis esse architecto possimus voluptates veniam rem sit
            dignissimos aliquam vero velit maiores! Laudantium, autem. Ducimus
            libero quod eius magni minus, non tempora vero quam! Beatae
            molestias quaerat voluptatibus deleniti incidunt corporis ipsam, aut
            sequi est. Eligendi officia, aliquid hic impedit libero corrupti
            nisi eos corporis error cumque, exercitationem tempora vero,
            delectus ullam sint at! Nesciunt facilis alias dolore. Tempora
            sapiente consequatur animi facilis iusto dicta error, quo sunt quod!
            Obcaecati, magni voluptatibus ullam libero culpa voluptate earum,
            facere eligendi officiis fugit dolorem, laudantium vero. Est debitis
            soluta sapiente sequi fuga, incidunt beatae, dicta, adipisci fugit
            aspernatur nemo maxime ipsum impedit. Quibusdam repudiandae aliquid,
            doloribus natus, minus in sunt doloremque quia ipsum temporibus
            debitis expedita! Recusandae, totam, vitae suscipit consequatur
            repellat atque non odit architecto aut fugit, hic autem? Eaque saepe
            consectetur repudiandae delectus quo esse aut praesentium nostrum
            excepturi reiciendis, assumenda mollitia rem nulla! Ut nam deleniti
            iusto praesentium repudiandae voluptates saepe quod officia atque
            dicta quae, non cupiditate quibusdam accusantium. Voluptates
            nesciunt veniam libero adipisci, repellat ipsum voluptas, delectus
            nam magnam quo odit. Assumenda, odio facilis? Totam officiis
            placeat, quo adipisci unde odio labore porro! Impedit dignissimos
            qui tempora deleniti aperiam eveniet repellendus eligendi neque.
            Obcaecati sit, ad autem aliquid nesciunt architecto error! Eligendi
            debitis id qui distinctio animi, commodi cum quam beatae unde
            tenetur voluptas tempore! Consequatur est amet praesentium numquam
            provident ratione consectetur quia quibusdam ipsam, dignissimos
            tempore, totam, a voluptatem? Nihil eius sit iure quae ratione ea
            hic suscipit doloremque mollitia atque qui error dolorem voluptas
            harum nulla tempore deserunt odit, cupiditate esse, commodi ab
            magni, quam dolore vitae. Velit. Eaque placeat odio dolorum tempora
            est voluptates distinctio deleniti suscipit! Commodi et earum nemo
            pariatur quis non aut ratione reprehenderit harum sapiente velit,
            quibusdam fugit, libero necessitatibus veniam cum voluptatibus.
            Nihil ducimus laboriosam laudantium doloremque corrupti fuga ab est
            atque nisi eius dicta, nemo error, culpa accusamus eveniet neque
            itaque assumenda velit adipisci ipsam magnam delectus eaque sed quo.
            Esse! Placeat velit temporibus reprehenderit cum beatae eaque
            accusamus magnam architecto provident non iusto qui praesentium
            sunt, aut fugit at nulla voluptas quis, labore consequatur ratione.
            Culpa libero deleniti voluptates ducimus! Excepturi tempora error
            laudantium aliquam voluptate, dolorem neque dolorum nisi quaerat
            facilis eos natus? Numquam porro ducimus, molestiae quas, commodi
            eius quisquam optio libero iusto aperiam temporibus saepe corrupti
            autem? Assumenda obcaecati tempora eos? Aspernatur a commodi quos
            incidunt suscipit est dolore saepe sapiente laborum delectus illum
            itaque dignissimos in accusamus consequuntur ut accusantium quod
            optio, quisquam facilis aut tempora! Molestiae pariatur asperiores,
            debitis iure excepturi blanditiis aut rerum consectetur quaerat amet
            laborum veritatis, nobis porro repellat ut deserunt, vero eaque
            suscipit id voluptatem sed sit. Cumque eos obcaecati id. Eaque
            excepturi ipsum voluptate nostrum molestias vero quis voluptas
            tempore, corrupti odit quasi eligendi sunt accusamus, at, blanditiis
            iusto sequi. Ratione quasi tenetur quis dolor quia illum aliquid
            quibusdam optio.
          </p>
        </div>
      </section>
    </>
  );
};

export default UseRef;
