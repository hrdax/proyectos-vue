<template>
  <div>
    <h1>Prueba de Webpay Plus</h1>
    <form method="post" :action="response.url">
        {{response.url}}
        {{response.token}}

        <input type="hidden" name="token_ws" :value="response.token" />
        <input type="submit" value="Ir a pagar" />
    </form>
  </div>
</template>

<script>
import { WebpayPlus, Options, IntegrationCommerceCodes, IntegrationApiKeys, Environment } from 'transbank-sdk';

export default {
    name: 'WebpayPlusTest',
    setup() {
        const buyOrder = 'ordenCompra123';
        const sessionId = 'sesion123';
        const amount = 10000;
        const returnUrl = 'http://localhost:8080/webpayplusresult';
        const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

        const transaction = async () => {
            try {
                const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
                return response

            } catch (e) {
                console.log("Error", e)
                return null
            }
        }

        return {
            response: transaction()
        }
    }
};
</script>

<style>

</style>
