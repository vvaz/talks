# Questões

Por favor interrompam-me com as dúvidas que tiverem.

valerio@wpbox.io

# Objetivos

Novos truques para optimizar os sites
Fazer sentir-vos mal

# O que vamos falar hoje

Os problemas da performance
As métricas
As Ferramentas disponíveis
Compreendendo os browsers
Optimizações básicas

# o problema

Vocês já sabem que:

- os vossos utilizadores já estão tristes ou frustrados
- já estão a perder dinheiro

## Porquê?

Porque têm um site lento! Um site lento converte mentos (qualquer que seja o significado de conversão do vosso site (vendas, views, inscrições para uma newsletter, etc))

Provavelmente o causador desta lentidão é do nosso frontend.

No passado, pensávamos que o problema estava em servidores mal optimizados, por causa do Apache mal configurado, ou por existir queries à nossa base de dados que tornavam o site lento. Mas não eram os principais causadores!

## Coisas que podemos fazer:

Optimizar a transferência da página
Usar TLS (HTTPS) e HTTP/2
Optimizar o CSS e JavaScript
Optimizar imagens
Defenir uma politica para a HTTP Cache

Podemos olhar para o carregamento de uma página como se fosse uma refeição:

1. O CSS deverá ser o aperitivo (simples, pequeno, rápido)
2. Prato principal (vamos falar dele hoje)
3. JavaScript (deverá ser a sobremesa)

## Real problema

1. Tempo para que se possa interagir com o site
   Imagem - Time to interactive em média (+12.5s)
   Time to load a mobile landing page 22 seconds (antes da pandemia) by thinkwithgoogle.com

O utilizador muitas das vezes pensa que só consegue interagir com a página quando as imagens estiverem todas carregadas.

No mesmo estudo da thinkwithgoogle.com, eles notaram que se uma página for de 1s de carregamento para 10s de carregamento, a percentagem do visitante se ir embora sobe para 123%

2. Não damos o devido valor aos dispositivos móveis!

Antes tinhamos o subdominio m. (m.facebook.com)

Mãos no ar para quem testa os seus sites em Chrome, Safari, Edge, Firefox
https://gs.statcounter.com/
https://radar.cloudflare.com/

3. E o tráfego do Facebook e do Instagram?
   Eles têm um próprio browser (que não aparece nessas estatísticas) e que não usam o mesmo motor que os browsers normais.

7.6% do tráfego mundial é feito dentro das Apps da Meta.

Mas eu vivo num país desenvolvido que tem 5G, não preciso de me preocupar com a performance
Vamos ver - https://www.nperf.com/pt/map/PT/-/-/signal/?ll=36.37081815082829&lg=-18.730000000000004&zoom=5
https://www.gsma.com/mobileeconomy/

E mesmo assim, isto não é o problema real. Se nós pagarmos mais para ter velocidades mais rápidas, não é a largura de banda que vai tornar a visualização mais rápida, mas sim a latencia.

Latência:
Tempo que decorre entre o envio de um pacote de dados e a sua recepção, expressado em milisegundos.
