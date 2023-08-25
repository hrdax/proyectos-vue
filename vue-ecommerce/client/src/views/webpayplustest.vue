<template>
  <div>
    <h1>Prueba de Webpay Plus</h1>
    <form method="post" :action="response.url" v-if="response">
        <input type="hidden" name="token_ws" :value="response.token" />
        <input type="submit" value="Ir a pagar" />
    </form>
  </div>
</template>

<script>
import { WebpayPlus, Options, IntegrationCommerceCodes, IntegrationApiKeys, Environment } from 'transbank-sdk';
import { ref, onMounted } from 'vue';

export default {
    name: 'WebpayPlusTest',
    setup() {
        const buyOrder = 'ordenCompra12345678';
        const sessionId = 'sesion1234557545';
        const amount = 10000;
        const returnUrl = 'http://localhost:8080/webpayplusresult';
        console.log('respuesta ') 
        const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));


        onMounted(async () => {
            await transaction()
        })
        const transaction = async () => {
            console.log('respuesta ')
            const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
            return response
        }

        return {
        }
    }
};
</script>

<style>

</style>
