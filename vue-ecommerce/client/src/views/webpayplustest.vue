<template>
  <div>
    <h1>Prueba de Webpay Plus</h1>
    <form method="post" :action="response.url" v-if="response">
        {{response.url}}
        {{response.token}}

        <input type="hidden" name="token_ws" :value="response.token" />
        <input type="submit" value="Ir a pagar" />
    </form>
  </div>
</template>

<script>
import { WebpayPlus } from 'transbank-sdk'
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'
import { ref, onMounted } from 'vue'

export default {
    name: 'WebpayPlusTest',
    setup() {
        let response = ref(null)
        const buyOrder = 'ordenCompra123';
        const sessionId = 'sesion123';
        const amount = 1000;
        const returnUrl = 'http://localhost:8080/webpayplusresult';
        const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

        const transaction = async () => {
            try {
                response.value = await tx.create(buyOrder, sessionId, amount, returnUrl);
                console.log(response)
                return response

            } catch (e) {
                console.log("Error", e)
                return null
            }
        }

        onMounted(async () => {
            await transaction()
        })

        return {
            response,
        }
    }
};
</script>

<style>

</style>
