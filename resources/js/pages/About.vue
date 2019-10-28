<template>
    <div>
    <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 pb-10">
        <div class="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
            <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">NAVIGATION</p>
            <div class="block lg:hidden sticky inset-0">
                <button id="menu-toggle"
                    class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
            </div>
            <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
                style="top:5em;" id="menu-content">
                <ul class="list-reset">
                    <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                        <a href="#intro"
                            class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500">
                            <span class="pb-1 md:pb-0 text-sm text-gray-900 font-bold">Introduction</span>
                        </a>
                    </li>
                    <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                        <a href="#education"
                            class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                            <span class="pb-1 md:pb-0 text-sm">Education</span>
                        </a>
                    </li>
                    <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                        <a href="#skills"
                            class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                            <span class="pb-1 md:pb-0 text-sm">Skills</span>
                        </a>
                    </li>
                    <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                        <a href="#experiences"
                            class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                            <span class="pb-1 md:pb-0 text-sm">Experience</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="w-full lg:w-3/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
            <!--Title-->
            <div class="font-sans">
                <h1 class="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl" id="intro">Introduction</h1>
                <hr class="border-b border-gray-400">
            </div>
            <!--Post Content-->
            <!--Lead Para-->
            <p class="py-6 text-2xl text-justify">
                Hi 👋 my name is Abdilah Sammi. I am a Backend Developer currently working for
                <a href="//fanintek.com" class="underline" target="_blank">PT. FAN Integrasi Teknologi</a> in Bekasi,
                Indonesia. Currently studying at <a href="//yai.ac.id" class="underline" target="_blank">Universitas
                    Persada Indonesia Y.A.I</a>. I learn programming from my uncle when I was 13.
            </p>

            <img src="https://abdilah.id/assets/img/abdilah-sammi.JPG" title="My Picture when i visited Bandung">

            <!--Title-->
            <div class="font-sans">
                <h1 class="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl" id="education">Education</h1>
                <hr class="border-b border-gray-400">
            </div>

            <p class="py-6 text-2xl text-justify">As i mention previously, currently i studying at Universitas Persada
                Indonesia Y.A.I majoring in Computer Engineering. But, here the previous </p>
            <p class="py-2 font-sans">2015 - Present => Universitas Persada Indonesia Y.A.I</p>
            <p class="py-2 font-sans">2011 - 2014 => SMA Muhammadiyah 1 Jakarta</p>
            <h2 class="py-2 font-sans">2009 - 2011 => SMP Negeri 76 Jakarta</h2>
            <h3 class="py-2 font-sans">2007 - 2009 => SD Negeri Kenari 10 Pg (5th - 6th Grade)</h3>
            <h4 class="py-2 font-sans">2004 - 2007 => SD Bencongan Indah - Tangerang (1st - 4th Grade)</h4>

            <p class="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor
                sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
                diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu,
                blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
                rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam
                nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus.
                Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis nec nulla eget sem dictum elementum.</p>
            <ol>
                <li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce
                    vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam.
                    Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
                    scelerisque tortor semper posuere.</li>
                <li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor
                    ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris,
                    faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros
                    magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                <li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris
                    accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor
                    vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
            </ol>
            <blockquote class="border-l-4 border-purple-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
                ligula.</blockquote>
            <p class="py-6">Example code block:</p>
            <pre class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
				<code class="break-words whitespace-pre-wrap">
&lt;header class="site-header outer"&gt;
&lt;div class="inner"&gt;

&lt;/div&gt;
&lt;/header&gt;
				</code>
			</pre>
            <!--/ Post Content-->

        </div>
    </div>

    <footer-component></footer-component>
    </div>
</template>

<script>
    import FooterComponent from '../components/FooterComponent.vue'; 

    export default {
        created() {
            document.title = process.env.MIX_APP_NAME + " - About Me";
        },
        components: {
            FooterComponent
        }
    }

</script>
